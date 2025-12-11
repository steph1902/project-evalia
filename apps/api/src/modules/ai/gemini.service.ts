import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class GeminiService {
    private readonly logger = new Logger(GeminiService.name);
    private readonly genAI: GoogleGenerativeAI;
    private readonly model: string;

    constructor(private readonly config: ConfigService) {
        this.genAI = new GoogleGenerativeAI(config.get('GEMINI_API_KEY') || '');
        this.model = config.get('GEMINI_MODEL') || 'gemini-1.5-flash';
    }

    async generateContent(prompt: string): Promise<string> {
        try {
            const model = this.genAI.getGenerativeModel({ model: this.model });

            const result = await model.generateContent({
                contents: [{ role: 'user', parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 8192,
                },
            });

            const response = result.response;
            const text = response.text();

            // Extract JSON if wrapped in markdown code blocks
            const jsonMatch = text.match(/```json\n?([\s\S]*?)\n?```/);
            if (jsonMatch) {
                return jsonMatch[1].trim();
            }

            return text;
        } catch (error) {
            this.logger.error('Gemini API error:', error);
            throw new Error(`AI analysis failed: ${error.message}`);
        }
    }
}

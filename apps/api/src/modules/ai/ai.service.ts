import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../database/prisma.service';
import { GeminiService } from './gemini.service';
import { buildAnalysisPrompt, parseAnalysisResponse } from './prompts/analysis.prompt';

@Injectable()
export class AIService {
    private readonly logger = new Logger(AIService.name);

    constructor(
        private readonly prisma: PrismaService,
        private readonly gemini: GeminiService,
        private readonly config: ConfigService,
    ) { }

    async analyzeResponse(responseId: string) {
        const startTime = Date.now();

        // Get response with form and questions
        const response = await this.prisma.formResponse.findUnique({
            where: { id: responseId },
            include: {
                answers: {
                    include: { question: true },
                },
                form: {
                    include: {
                        questions: {
                            include: { options: true },
                        },
                        settings: true,
                    },
                },
            },
        });

        if (!response) {
            throw new NotFoundException('Response not found');
        }

        // Build prompt
        const prompt = buildAnalysisPrompt(response, response.form);

        // Call Gemini API
        const rawResponse = await this.gemini.generateContent(prompt);

        // Parse response
        const analysis = parseAnalysisResponse(rawResponse);

        // Save analysis
        const savedAnalysis = await this.prisma.aIAnalysis.upsert({
            where: { responseId },
            create: {
                responseId,
                overallScore: analysis.overallScore,
                confidence: analysis.confidence,
                summary: analysis.summary,
                strengths: analysis.strengths,
                concerns: analysis.concerns,
                keywords: analysis.keywords,
                categoryScores: analysis.categoryScores,
                sentiment: analysis.sentiment,
                recommendations: analysis.recommendations,
                promptUsed: prompt,
                rawResponse: rawResponse,
                modelVersion: this.config.get('GEMINI_MODEL') || 'gemini-1.5-flash',
                processingTime: Date.now() - startTime,
            },
            update: {
                overallScore: analysis.overallScore,
                confidence: analysis.confidence,
                summary: analysis.summary,
                strengths: analysis.strengths,
                concerns: analysis.concerns,
                keywords: analysis.keywords,
                categoryScores: analysis.categoryScores,
                sentiment: analysis.sentiment,
                recommendations: analysis.recommendations,
                promptUsed: prompt,
                rawResponse: rawResponse,
                modelVersion: this.config.get('GEMINI_MODEL') || 'gemini-1.5-flash',
                processingTime: Date.now() - startTime,
                updatedAt: new Date(),
            },
        });

        return {
            success: true,
            data: savedAnalysis,
        };
    }
}

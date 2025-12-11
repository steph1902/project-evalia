export function buildAnalysisPrompt(response: any, form: any): string {
    const scoringCriteria = form.settings?.scoringCriteria;

    return `
You are an expert HR analyst evaluating pre-interview assessment responses. 
Analyze the following candidate submission and provide a comprehensive, objective assessment.

## Assessment Context
**Form Title:** ${form.title}
**Form Description:** ${form.description || 'N/A'}

${scoringCriteria ? `
## Scoring Criteria
${JSON.stringify(scoringCriteria, null, 2)}
` : ''}

## Candidate Responses

${response.answers.map((answer: any) => {
        const question = answer.question;
        const value = answer.textValue || answer.numberValue || answer.arrayValue?.join(', ') || answer.dateValue || 'No response';

        return `
### Question: ${question.title}
**Type:** ${question.type}
**Required:** ${question.required ? 'Yes' : 'No'}
**AI Weight:** ${question.aiWeight}/10
${question.aiInstructions ? `**Analysis Focus:** ${question.aiInstructions}` : ''}
**Response:** ${value}
`;
    }).join('\n')}

## Analysis Instructions
1. Evaluate each response considering the question type and AI weight
2. Identify concrete strengths with supporting evidence from responses
3. Note any concerns or areas requiring follow-up
4. Extract relevant keywords (skills, experience, traits)
5. Assess overall sentiment and communication quality
6. Provide specific interview follow-up recommendations

## Required Output Format (JSON)
{
  "overallScore": <number 0-100>,
  "confidence": <number 0-1 indicating analysis confidence>,
  "summary": "<2-3 sentence executive summary of the candidate>",
  "strengths": [
    {
      "title": "<strength category>",
      "description": "<specific evidence from responses>",
      "relevantQuestions": ["<question titles that support this>"],
      "confidence": <0-1>
    }
  ],
  "concerns": [
    {
      "title": "<concern category>",
      "description": "<specific evidence or lack thereof>",
      "relevantQuestions": ["<relevant question titles>"],
      "confidence": <0-1>
    }
  ],
  "keywords": [
    {
      "term": "<keyword>",
      "category": "SKILL" | "EXPERIENCE" | "TRAIT" | "OTHER",
      "frequency": <occurrence count>,
      "sentiment": "POSITIVE" | "NEUTRAL" | "NEGATIVE"
    }
  ],
  "categoryScores": [
    {
      "category": "<evaluation category>",
      "score": <0-100>,
      "maxScore": 100,
      "feedback": "<specific feedback for this category>"
    }
  ],
  "sentiment": {
    "overall": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
    "score": <-1 to 1>
  },
  "recommendations": [
    "<specific follow-up question or interview topic>"
  ]
}

Provide an honest, balanced assessment. Be specific and cite evidence from responses.
Focus on job-relevant qualifications and potential red flags.
`;
}

export function parseAnalysisResponse(rawResponse: string): any {
    try {
        const parsed = JSON.parse(rawResponse);

        // Validate required fields
        if (typeof parsed.overallScore !== 'number') {
            parsed.overallScore = 0;
        }

        // Ensure arrays exist
        parsed.strengths = parsed.strengths || [];
        parsed.concerns = parsed.concerns || [];
        parsed.keywords = parsed.keywords || [];
        parsed.categoryScores = parsed.categoryScores || [];
        parsed.recommendations = parsed.recommendations || [];

        // Ensure sentiment exists
        parsed.sentiment = parsed.sentiment || {
            overall: 'NEUTRAL',
            score: 0,
        };

        // Clamp confidence
        parsed.confidence = Math.min(1, Math.max(0, parsed.confidence || 0.5));

        return parsed;
    } catch (error) {
        throw new Error(`Failed to parse AI response: ${error.message}`);
    }
}

import { Controller, Post, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AIService } from './ai.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('AI')
@Controller('ai')
export class AIController {
    constructor(private readonly aiService: AIService) { }

    @Post('analyze/:responseId')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Trigger AI analysis for a response' })
    analyze(@Param('responseId') responseId: string) {
        return this.aiService.analyzeResponse(responseId);
    }
}

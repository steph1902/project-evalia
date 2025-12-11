import { Module } from '@nestjs/common';
import { AIService } from './ai.service';
import { AIController } from './ai.controller';
import { GeminiService } from './gemini.service';
import { PrismaModule } from '../../database/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [PrismaModule, ConfigModule],
    controllers: [AIController],
    providers: [AIService, GeminiService],
    exports: [AIService],
})
export class AIModule { }

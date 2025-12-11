import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateResponseDto } from './dto';

@Injectable()
export class ResponsesService {
    constructor(private prisma: PrismaService) { }

    async create(formId: string, dto: CreateResponseDto) {
        const form = await this.prisma.form.findUnique({
            where: { id: formId },
        });

        if (!form) {
            throw new NotFoundException('Form not found');
        }

        return this.prisma.formResponse.create({
            data: {
                formId,
                respondentEmail: dto.respondentEmail,
                answers: {
                    create: dto.answers.map(ans => ({
                        questionId: ans.questionId,
                        textValue: ans.textValue,
                        numberValue: ans.numberValue,
                        arrayValue: ans.arrayValue || [],
                        dateValue: ans.dateValue ? new Date(ans.dateValue) : undefined,
                        fileUrl: ans.fileUrl,
                    })),
                },
                metadata: dto.metadata ? {
                    create: {
                        // Simplified metadata mapping
                        startedAt: new Date(),
                        submittedAt: new Date(),
                        completionTime: 0,
                        ...dto.metadata
                    }
                } : undefined,
            },
            include: {
                answers: true,
            },
        });
    }

    async findAll(formId: string) {
        return this.prisma.formResponse.findMany({
            where: { formId },
            include: {
                answers: {
                    include: { question: true },
                },
                aiAnalysis: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        const response = await this.prisma.formResponse.findUnique({
            where: { id },
            include: {
                answers: {
                    include: { question: true },
                },
                aiAnalysis: true,
                form: true,
            },
        });

        if (!response) {
            throw new NotFoundException('Response not found');
        }

        return response;
    }
}

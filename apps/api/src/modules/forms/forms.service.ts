import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateFormDto, UpdateFormDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class FormsService {
    constructor(private prisma: PrismaService) { }

    async create(userId: string, dto: CreateFormDto) {
        const { questions, settings, ...formData } = dto;

        return this.prisma.form.create({
            data: {
                ...formData,
                createdById: userId,
                settings: {
                    create: settings || {},
                },
                questions: {
                    create: questions.map((q: typeof dto.questions[number], index: number) => ({
                        ...q,
                        order: index,
                        options: {
                            create: q.options?.map((opt: typeof q.options[number], optIndex: number) => ({
                                ...opt,
                                order: optIndex,
                            })),
                        },
                    })),
                },
            },
            include: {
                questions: {
                    include: { options: true },
                },
                settings: true,
            },
        });
    }

    async findAll(userId: string) {
        return this.prisma.form.findMany({
            where: { createdById: userId },
            orderBy: { updatedAt: 'desc' },
            include: {
                _count: {
                    select: { responses: true },
                },
            },
        });
    }

    async findOne(userId: string, id: string) {
        const form = await this.prisma.form.findUnique({
            where: { id },
            include: {
                questions: {
                    orderBy: { order: 'asc' },
                    include: { options: { orderBy: { order: 'asc' } } },
                },
                settings: true,
            },
        });

        if (!form) {
            throw new NotFoundException('Form not found');
        }

        if (form.createdById !== userId) {
            throw new ForbiddenException('Access denied');
        }

        return form;
    }

    async findPublic(shareId: string) {
        const form = await this.prisma.form.findUnique({
            where: { shareId },
            include: {
                questions: {
                    orderBy: { order: 'asc' },
                    include: { options: { orderBy: { order: 'asc' } } },
                },
                settings: true,
            },
        });

        if (!form) {
            throw new NotFoundException('Form not found');
        }

        if (form.status !== 'PUBLISHED') {
            throw new ForbiddenException('Form is not published');
        }

        return form;
    }

    async update(userId: string, id: string, dto: UpdateFormDto) {
        await this.findOne(userId, id); // Verify access

        const { questions, settings, ...formData } = dto;

        // Transactional update is complex for nested relations, 
        // for now we'll do a simple update of top-level fields
        // In a real app, you'd handle question diffing/reordering carefully.

        // Simplification: Update form details and settings only for now
        // Question updates would require robust diffing logic

        return this.prisma.$transaction(async (tx) => {
            // Update main form details
            const updatedForm = await tx.form.update({
                where: { id },
                data: {
                    ...formData,
                    settings: settings ? {
                        upsert: {
                            create: settings,
                            update: settings,
                        },
                    } : undefined,
                },
            });

            // Handle questions: Delete all and recreate
            // This is a simplified approach. Ideally we would diff/update.
            if (questions) {
                // Delete existing questions (options and answers will cascade delete)
                await tx.question.deleteMany({
                    where: { formId: id },
                });

                // Create new questions
                for (const [index, q] of questions.entries()) {
                    await tx.question.create({
                        data: {
                            ...q,
                            formId: id,
                            order: index,
                            options: {
                                create: q.options?.map((opt, optIndex) => ({
                                    ...opt,
                                    order: optIndex,
                                })),
                            },
                        },
                    });
                }
            }

            return tx.form.findUnique({
                where: { id },
                include: {
                    questions: {
                        orderBy: { order: 'asc' },
                        include: { options: { orderBy: { order: 'asc' } } },
                    },
                    settings: true,
                },
            });
        });
    }

    async remove(userId: string, id: string) {
        await this.findOne(userId, id);
        return this.prisma.form.delete({ where: { id } });
    }

    async publish(userId: string, id: string) {
        await this.findOne(userId, id);
        return this.prisma.form.update({
            where: { id },
            data: { status: 'PUBLISHED', publishedAt: new Date() },
        });
    }

    async close(userId: string, id: string) {
        await this.findOne(userId, id);
        return this.prisma.form.update({
            where: { id },
            data: { status: 'CLOSED', closedAt: new Date() },
        });
    }
}

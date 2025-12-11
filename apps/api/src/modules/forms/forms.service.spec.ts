import { Test, TestingModule } from '@nestjs/testing';
import { FormsService } from './forms.service';
import { PrismaService } from '../../database/prisma.service';
import { CreateFormDto, UpdateFormDto } from './dto';
import { NotFoundException, ForbiddenException } from '@nestjs/common';

describe('FormsService', () => {
    let service: FormsService;
    let prisma: PrismaService;

    const mockPrismaService = {
        form: {
            create: jest.fn(),
            findMany: jest.fn(),
            findUnique: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        question: {
            deleteMany: jest.fn(),
            create: jest.fn(),
        },
        $transaction: jest.fn((callback) => callback(mockPrismaService)),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FormsService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<FormsService>(FormsService);
        prisma = module.get<PrismaService>(PrismaService);

        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('should create a form with questions and settings', async () => {
            const userId = 'user-1';
            const dto: CreateFormDto = {
                title: 'Test Form',
                questions: [{ title: 'Q1', type: 'SHORT_TEXT', required: true, order: 0, aiWeight: 1 }],
                settings: { collectEmail: true } as any,
            };

            const expectedResult = { id: 'form-1', ...dto };
            mockPrismaService.form.create.mockResolvedValue(expectedResult);

            const result = await service.create(userId, dto);

            expect(result).toEqual(expectedResult);
            expect(mockPrismaService.form.create).toHaveBeenCalledWith(expect.objectContaining({
                data: expect.objectContaining({
                    title: 'Test Form',
                    createdById: userId,
                    questions: expect.any(Object),
                    settings: expect.any(Object),
                }),
            }));
        });
    });

    describe('findAll', () => {
        it('should return an array of forms for the user', async () => {
            const userId = 'user-1';
            const forms = [{ id: 'form-1', title: 'Test' }];
            mockPrismaService.form.findMany.mockResolvedValue(forms);

            const result = await service.findAll(userId);
            expect(result).toEqual(forms);
            expect(mockPrismaService.form.findMany).toHaveBeenCalledWith(expect.objectContaining({
                where: { createdById: userId }
            }));
        });
    });

    describe('findOne', () => {
        it('should return a form if owned by user', async () => {
            const userId = 'user-1';
            const form = { id: 'form-1', title: 'Test', createdById: userId };
            mockPrismaService.form.findUnique.mockResolvedValue(form);

            const result = await service.findOne(userId, 'form-1');
            expect(result).toEqual(form);
        });

        it('should throw NotFoundException if form does not exist', async () => {
            mockPrismaService.form.findUnique.mockResolvedValue(null);
            await expect(service.findOne('user-1', 'bad-id')).rejects.toThrow(NotFoundException);
        });

        it('should throw ForbiddenException if user is not owner', async () => {
            const form = { id: 'form-1', createdById: 'other-user' };
            mockPrismaService.form.findUnique.mockResolvedValue(form);
            await expect(service.findOne('user-1', 'form-1')).rejects.toThrow(ForbiddenException);
        });
    });

    describe('update', () => {
        it('should update form details and replace questions in transaction', async () => {
            const userId = 'user-1';
            const formId = 'form-1';
            const dto: UpdateFormDto = {
                title: 'Updated Title',
                questions: [{ title: 'New Q', type: 'LONG_TEXT', required: false, order: 0, aiWeight: 1 }],
            };

            // Mock findOne for access check
            mockPrismaService.form.findUnique.mockResolvedValue({ id: formId, createdById: userId });
            mockPrismaService.form.update.mockResolvedValue({ id: formId, title: 'Updated Title' });

            await service.update(userId, formId, dto);

            expect(mockPrismaService.$transaction).toHaveBeenCalled();
            // In full mock, we'd verify the internal transaction calls, 
            // but here we verify specific methods were mocked and called inside the transaction context via mockPrismaService
            expect(mockPrismaService.form.update).toHaveBeenCalledWith(expect.objectContaining({
                where: { id: formId },
                data: expect.objectContaining({ title: 'Updated Title' })
            }));
            expect(mockPrismaService.question.deleteMany).toHaveBeenCalledWith({ where: { formId } });
            expect(mockPrismaService.question.create).toHaveBeenCalled();
        });
    });

    describe('publish', () => {
        it('should update status to PUBLISHED', async () => {
            const userId = 'user-1';
            const formId = 'form-1';
            mockPrismaService.form.findUnique.mockResolvedValue({ id: formId, createdById: userId });

            await service.publish(userId, formId);

            expect(mockPrismaService.form.update).toHaveBeenCalledWith(expect.objectContaining({
                where: { id: formId },
                data: expect.objectContaining({ status: 'PUBLISHED' })
            }));
        });
    });
});

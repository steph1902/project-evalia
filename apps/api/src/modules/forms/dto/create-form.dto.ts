import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, Max, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export enum QuestionType {
    SHORT_TEXT = 'SHORT_TEXT',
    LONG_TEXT = 'LONG_TEXT',
    SINGLE_CHOICE = 'SINGLE_CHOICE',
    MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
    DROPDOWN = 'DROPDOWN',
    LINEAR_SCALE = 'LINEAR_SCALE',
    DATE = 'DATE',
    FILE_UPLOAD = 'FILE_UPLOAD',
    SECTION_BREAK = 'SECTION_BREAK',
}

class QuestionOptionDto {
    @ApiProperty()
    @IsString()
    value: string;

    @ApiProperty()
    @IsString()
    label: string;
}

class QuestionDto {
    @ApiProperty({ enum: QuestionType })
    @IsEnum(QuestionType)
    type: QuestionType;

    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    required?: boolean;

    @ApiProperty({ required: false, default: 5 })
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(10)
    aiWeight?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    aiInstructions?: string;

    @ApiProperty({ type: [QuestionOptionDto], required: false })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionOptionDto)
    options?: QuestionOptionDto[];
}

class FormSettingsDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    collectEmail?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    showProgressBar?: boolean;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    aiAnalysisEnabled?: boolean;
}

export class CreateFormDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ type: [QuestionDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionDto)
    questions: QuestionDto[];

    @ApiProperty({ required: false })
    @IsOptional()
    @ValidateNested()
    @Type(() => FormSettingsDto)
    settings?: FormSettingsDto;
}

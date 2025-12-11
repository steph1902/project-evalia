import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class AnswerDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    questionId: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    textValue?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    numberValue?: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    arrayValue?: string[];

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    dateValue?: string;

    // File upload logic handled separately or via signed URLs, 
    // for now simplified to string URL
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    fileUrl?: string;
}

export class CreateResponseDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsEmail()
    respondentEmail?: string;

    @ApiProperty({ type: [AnswerDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnswerDto)
    answers: AnswerDto[];

    @ApiProperty({ required: false })
    @IsOptional()
    metadata?: any;
}

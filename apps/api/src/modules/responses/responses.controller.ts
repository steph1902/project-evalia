import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ResponsesService } from './responses.service';
import { CreateResponseDto } from './dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Responses')
@Controller('responses')
export class ResponsesController {
    constructor(private readonly responsesService: ResponsesService) { }

    @Post(':formId')
    @ApiOperation({ summary: 'Submit a response to a form' })
    create(@Param('formId') formId: string, @Body() createResponseDto: CreateResponseDto) {
        return this.responsesService.create(formId, createResponseDto);
    }

    @Get('form/:formId')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get all responses for a form' })
    findAll(@Param('formId') formId: string) {
        return this.responsesService.findAll(formId);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get a specific response' })
    findOne(@Param('id') id: string) {
        return this.responsesService.findOne(id);
    }
}

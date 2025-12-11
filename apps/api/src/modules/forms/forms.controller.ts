import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { FormsService } from './forms.service';
import { CreateFormDto, UpdateFormDto } from './dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Forms')
@Controller('forms')
export class FormsController {
    constructor(private readonly formsService: FormsService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Create a new form' })
    create(@CurrentUser() user: any, @Body() createFormDto: CreateFormDto) {
        return this.formsService.create(user.id, createFormDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get all forms for current user' })
    findAll(@CurrentUser() user: any) {
        return this.formsService.findAll(user.id);
    }

    @Get('public/:shareId')
    @ApiOperation({ summary: 'Get public form by share ID' })
    findPublic(@Param('shareId') shareId: string) {
        return this.formsService.findPublic(shareId);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get form by ID' })
    findOne(@CurrentUser() user: any, @Param('id') id: string) {
        return this.formsService.findOne(user.id, id);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    update(@CurrentUser() user: any, @Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
        return this.formsService.update(user.id, id, updateFormDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    remove(@CurrentUser() user: any, @Param('id') id: string) {
        return this.formsService.remove(user.id, id);
    }

    @Post(':id/publish')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    publish(@CurrentUser() user: any, @Param('id') id: string) {
        return this.formsService.publish(user.id, id);
    }

    @Post(':id/close')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    close(@CurrentUser() user: any, @Param('id') id: string) {
        return this.formsService.close(user.id, id);
    }
}

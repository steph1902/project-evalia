import { Module } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { PrismaModule } from '../../database/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [ResponsesController],
    providers: [ResponsesService],
    exports: [ResponsesService],
})
export class ResponsesModule { }

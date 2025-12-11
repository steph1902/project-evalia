import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule } from './modules/forms/forms.module';
import { ResponsesModule } from './modules/responses/responses.module';
import { AIModule } from './modules/ai/ai.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    FormsModule,
    ResponsesModule,
    AIModule,
  ],
})
export class AppModule { }

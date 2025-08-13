import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DailyContentsController } from './daily-contents.controller';
import { DailyContentsService } from './daily-contents.service';
import {
  DailyContent,
  DailyContentSchema,
} from './schemas/daily-content.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DailyContent.name, schema: DailyContentSchema },
    ]),
  ],
  controllers: [DailyContentsController],
  providers: [DailyContentsService],
  exports: [DailyContentsService],
})
export class DailyContentsModule {}

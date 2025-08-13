import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DailyContent } from './schemas/daily-content.schema';

@Injectable()
export class DailyContentsService {
  constructor(
    @InjectModel(DailyContent.name)
    private dailyContentModel: Model<DailyContent>,
  ) {}

  async findAll(): Promise<DailyContent[]> {
    return this.dailyContentModel.find().exec();
  }
}

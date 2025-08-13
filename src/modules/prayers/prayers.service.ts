import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prayer } from './schemas/prayer.schema';

@Injectable()
export class PrayersService {
  constructor(@InjectModel(Prayer.name) private prayerModel: Model<Prayer>) {}

  async findAll(): Promise<Prayer[]> {
    return this.prayerModel.find().exec();
  }
}

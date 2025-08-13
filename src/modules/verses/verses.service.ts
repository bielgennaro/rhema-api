import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Verse } from './schemas/verse.schema';

@Injectable()
export class VersesService {
  constructor(@InjectModel(Verse.name) private verseModel: Model<Verse>) {}

  async findAll(): Promise<Verse[]> {
    return this.verseModel.find().exec();
  }
}

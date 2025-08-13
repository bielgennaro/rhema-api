import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Prayer, PrayerSchema } from './schemas/prayer.schema';
import { PrayersController } from './prayers.controller';
import { PrayersService } from './prayers.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Prayer.name, schema: PrayerSchema }]),
  ],
  controllers: [PrayersController],
  providers: [PrayersService],
  exports: [PrayersService],
})
export class PrayersModule {}

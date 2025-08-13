import { Controller, Get } from '@nestjs/common';
import { PrayersService } from './prayers.service';

@Controller('prayers')
export class PrayersController {
  constructor(private readonly prayersService: PrayersService) {}

  @Get()
  findAll() {
    return this.prayersService.findAll();
  }
}

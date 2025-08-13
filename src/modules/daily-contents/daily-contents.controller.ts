import { Controller, Get } from '@nestjs/common';
import { DailyContentsService } from './daily-contents.service';

@Controller('daily-contents')
export class DailyContentsController {
  constructor(private readonly dailyContentsService: DailyContentsService) {}

  @Get()
  findAll() {
    return this.dailyContentsService.findAll();
  }
}

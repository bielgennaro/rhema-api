import { Controller, Get } from '@nestjs/common';
import { VersesService } from './verses.service';

@Controller('verses')
export class VersesController {
  constructor(private readonly versesService: VersesService) {}

  @Get()
  findAll() {
    return this.versesService.findAll();
  }
}

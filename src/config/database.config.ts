import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

export const mongooseConfig: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    uri:
      configService.get<string>('MONGODB_URI') ||
      'mongodb://localhost:27017/rhema-app',
  }),
  inject: [ConfigService],
};

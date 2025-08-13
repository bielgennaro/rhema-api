import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrayersModule } from './modules/prayers/prayers.module';
import { VersesModule } from './modules/verses/verses.module';
import { UsersModule } from './modules/users/users.module';
import { DailyContentsModule } from './modules/daily-contents/daily-contents.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/rhema-app',
    ),
    PrayersModule,
    VersesModule,
    UsersModule,
    DailyContentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

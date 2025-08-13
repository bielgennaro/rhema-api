import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  avatar?: string;

  @Prop({ default: 'free', enum: ['free', 'premium'] })
  subscriptionType?: string;

  @Prop({ default: [] })
  favoriteVerses: Types.ObjectId[];

  @Prop({ default: [] })
  favoriteQuotes: Types.ObjectId[];

  @Prop({ default: [] })
  favoritePrayers: Types.ObjectId[];

  @Prop({ default: [] })
  preferences: {
    notificationTime?: string;
    theme?: string;
    enableNotifications?: boolean;
    prayerReminders?: boolean;
    preferredBibleVersion?: string;
  };

  @Prop({ default: 0 })
  dailyStreak: number;

  @Prop({ default: 0 })
  lastPrayerDate?: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

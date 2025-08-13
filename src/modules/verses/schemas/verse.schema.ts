import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Date } from 'mongoose';

@Schema()
export class Verse {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  reference: string;

  @Prop({ required: true })
  book: string;

  @Prop({ required: true })
  chapter: number;

  @Prop({ required: true })
  verse: number;

  @Prop()
  reflection?: string;

  @Prop()
  tags?: string[]; // ["amor", "salvação", "fé"]

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop()
  deletedAt?: Date;

  @Prop({ default: 'NTLH', enum: ['NTLH', 'NVI', 'KJV', 'ESV', 'NIV'] })
  bibleVersion: string; // https://nabibliaonline.com.br/versoes-da-biblia/
}

export const VerseSchema = SchemaFactory.createForClass(Verse);

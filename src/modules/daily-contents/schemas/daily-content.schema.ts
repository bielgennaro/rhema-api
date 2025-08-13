import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class DailyContent {
  @Prop({ required: true, unique: true })
  date: Date;

  @Prop({ type: Types.ObjectId, ref: 'Verse', required: true })
  verseOfTheDay: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Prayer', required: true })
  prayerOfTheDay: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Saint', required: true })
  saintOfTheDay: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Reflection', required: true })
  reflectionOfTheDay: Types.ObjectId;

  @Prop()
  liturgicalColor?: string; // e.g., "Verde", "Branco", "Vermelho", "Roxo".
  // https://pt.wikipedia.org/wiki/Cores_lit%C3%BArgicas_na_Igreja_Cat%C3%B3lica_Apost%C3%B3lica_Romana

  @Prop()
  liturgicalSeason?: string; // e.g., "Advento", "Natal", "Páscoa"
  // https://diocesedepesqueira.com.br/formacao-como-se-dividem-o-tempos-liturgicos/
}

export const DailyContentSchema = SchemaFactory.createForClass(DailyContent);

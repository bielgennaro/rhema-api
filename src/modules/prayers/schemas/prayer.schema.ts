import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Prayer {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  description?: string;

  @Prop({
    default: 'traditional',
    enum: [
      'traditional',
      'meditation',
      'novenna',
      'litanies',
      'rosary',
      'chaplet',
    ],
  })
  type: string; // e.g., "tradicional", "meditação"

  @Prop()
  audioUrl?: string; // url para o áudio da oração (pensado para o futuro)

  @Prop({ default: 1 })
  duration: number; // duração em minutos

  @Prop({ default: 1 })
  priority: number; // prioridade da oração, para ordenação

  @Prop({ default: [] })
  tags: string[]; // e.g., ["amor", "paz", "saúde"]
}

export const PrayerSchema = SchemaFactory.createForClass(Prayer);

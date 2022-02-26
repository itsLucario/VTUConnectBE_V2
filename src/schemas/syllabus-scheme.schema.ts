import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class Subject {
  @Prop({ required: true })
  subjectCode: string;

  @Prop({ required: true })
  subjectCodeAlias: [string];
}

@Schema({})
export class SyllabusScheme {
  @Prop({ required: true })
  university: string;

  @Prop({ required: true })
  scheme: string;

  @Prop({ required: true })
  branch: string;

  @Prop({ required: true })
  semester: string;

  @Prop({ required: true, min: 1 })
  subjects: [Subject];
}

export const SyllabusSchemeSchema =
  SchemaFactory.createForClass(SyllabusScheme);

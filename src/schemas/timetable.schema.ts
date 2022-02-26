import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class Subject {
  @Prop({ required: true })
  subjectCode: string;

  @Prop({ required: true })
  subjectName: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  examTime: string;
}

@Schema()
export class TimeTable {
  @Prop({ required: true })
  examTitle: string;

  @Prop({ required: true })
  scheme: string;

  @Prop({ required: true })
  branch: string;

  @Prop({ required: true })
  semester: string;

  @Prop()
  instructions: string;

  @Prop({ type: [Subject], required: true })
  subjects: [Subject];

  @Prop({ type: Date, default: Date.now })
  lastUpdated: Date;
}

export const TimeTableSchema = SchemaFactory.createForClass(TimeTable);

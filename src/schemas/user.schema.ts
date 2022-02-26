import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  fullName: string;

  @Prop()
  avatar: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  provider: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  usn: string;

  @Prop({ required: true })
  college: string;

  @Prop({ required: true })
  branch: string;

  @Prop({ required: true })
  semester: string;

  @Prop()
  phone: string;

  @Prop({ default: false })
  verified: boolean;

  @Prop({ required: true })
  scheme: string;

  @Prop({ default: 'student' })
  type: string;

  @Prop({ default: ['user'] })
  scope: Array<string>;

  @Prop({ default: [] })
  pollsVoted: Array<string>;
}

export const UserSchema = SchemaFactory.createForClass(User);

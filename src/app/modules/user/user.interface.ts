/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { IJobSeeker } from '../jobSeeker/jobSeeker.interface';

export type IUser = {
  email: string;
  role?: string;
  needsProfileUpdate: true | false;
  profileUpdatedAt?: Date;
  jobSeeker?: Types.ObjectId | IJobSeeker;
};

export type UserModel = Model<IUser, Record<string, unknown>>;

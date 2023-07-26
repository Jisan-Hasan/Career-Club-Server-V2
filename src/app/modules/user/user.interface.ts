/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { IJobSeeker } from '../jobSeeker/jobSeeker.interface';
import { IOrganization } from '../organization/organization.interface';

export type IUser = {
  email: string;
  role?: string;
  needsProfileUpdate: true | false;
  profileUpdatedAt?: Date;
  jobSeeker?: Types.ObjectId | IJobSeeker;
  organization?: Types.ObjectId | IOrganization;
};

export type UserModel = Model<IUser, Record<string, unknown>>;

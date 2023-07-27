/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { IAdmin } from '../admin/admin.interface';
import { IJobSeeker } from '../jobSeeker/jobSeeker.interface';
import { IOrganization } from '../organization/organization.interface';

export type IUser = {
  email: string;
  role?: string;
  needsProfileUpdate: true | false;
  jobSeeker?: Types.ObjectId | IJobSeeker;
  organization?: Types.ObjectId | IOrganization;
  admin?: Types.ObjectId | IAdmin;
};

// export type UserModel = Model<IUser, Record<string, unknown>>;

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, 'email' | 'role' | 'needsProfileUpdate'>>;
} & Model<IUser>;

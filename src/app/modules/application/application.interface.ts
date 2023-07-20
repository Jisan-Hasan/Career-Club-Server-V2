import { Model, Types } from 'mongoose';
import { IJob } from '../job/job.interface';

export type IApplication = {
  seeker_email: string;
  job: Types.ObjectId | IJob;
};

export type ApplicationModel = Model<IApplication, Record<string, unknown>>;

export type IApplicationFilters = {
  searchTerm?: string;
};

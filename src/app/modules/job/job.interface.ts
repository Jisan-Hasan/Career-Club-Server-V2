import { Model, Types } from 'mongoose';
import { ICategory } from '../category/category.interface';

export type IJobDuration =
  | 'Full Time'
  | 'Part Time'
  | 'Contract'
  | 'Freelance'
  | 'Internship';

export type IJobType = 'On Site' | 'Remote' | 'Hybrid';

export type IJob = {
  title: string;
  category: Types.ObjectId | ICategory;
  duration: IJobDuration;
  type: IJobType;
  location: string;
  salary: number;
  experience: string;
  description: string;
  employer_email: string;
  isApproved: boolean;
};

export type JobModel = Model<IJob, Record<string, unknown>>;

export type IJobFilters = {
  searchTerm?: string;
  title?: string;
};

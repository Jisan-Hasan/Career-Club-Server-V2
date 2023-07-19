import { IJobDuration, IJobType } from './job.interface';

export const jobDurations: IJobDuration[] = [
  'Contract',
  'Freelance',
  'Full Time',
  'Internship',
  'Part Time',
];

export const jobTypes: IJobType[] = ['Hybrid', 'On Site', 'Remote'];

export const jobSearchableFields = ['title'];

export const jobFilterableFields = ['searchTerm', 'title', 'duration', 'type'];

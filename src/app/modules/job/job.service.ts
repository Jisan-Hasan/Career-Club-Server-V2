import { IJob } from './job.interface';
import { Job } from './job.model';

const createJob = async (payload: IJob): Promise<IJob | null> => {
  const result = (await Job.create(payload)).populate('category');
  return result;
};


export const JobService = { createJob };

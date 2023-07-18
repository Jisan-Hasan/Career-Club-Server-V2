import { Schema, model } from 'mongoose';
import { jobDurations, jobTypes } from './job.constant';
import { IJob, JobModel } from './job.interface';

const JobSchema = new Schema<IJob, JobModel>(
  {
    title: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    duration: { type: String, required: true, enum: jobDurations },
    type: { type: String, required: true, enum: jobTypes },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
    experience: { type: String, required: true },
    description: { type: String, required: true },
    employer_email: { type: String, required: true },
    isApproved: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Job = model<IJob, JobModel>('Job', JobSchema);

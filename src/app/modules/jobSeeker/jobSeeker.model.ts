import { Schema, model } from 'mongoose';
import { JobModel } from '../job/job.interface';
import { gender } from './jobSeeker.constant';
import { IJobSeeker, JobSeekerModel } from './jobSeeker.interface';

// Define the UserName schema

// Define the SocialMedia schema
const SocialMediaSchema = new Schema({
  facebook: { type: String },
  github: { type: String },
  linkedin: { type: String },
  portfolio: { type: String },
});

export const JobSeekerSchema = new Schema<IJobSeeker, JobModel>(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: gender },
    bio: { type: String },
    presentAddress: { type: String },
    permanentAddress: { type: String },
    institute: { type: String },
    cgpa: { type: Number },
    contactNo: { type: String },
    emergencyContactNo: { type: String },
    socialMediaLink: { type: SocialMediaSchema },
    resume: { type: String },
    image: { type: String },
    skills: [{ type: String }],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const JobSeeker = model<IJobSeeker, JobSeekerModel>(
  'JobSeeker',
  JobSeekerSchema
);

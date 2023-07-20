import { Schema, model } from 'mongoose';
import { ApplicationModel, IApplication } from './application.interface';

const ApplicationSchema = new Schema<IApplication, ApplicationModel>(
  {
    seeker_email: { type: String, required: true },
    job: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Application = model<IApplication, ApplicationModel>(
  'Application',
  ApplicationSchema
);

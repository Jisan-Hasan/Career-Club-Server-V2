import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const UserSchema = new Schema<IUser, UserModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
    },
    needsProfileUpdate: {
      type: Boolean,
      default: true,
    },
    jobSeeker: {
      type: Schema.Types.ObjectId,
      ref: 'JobSeeker',
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: 'Organization',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.statics.isUserExist = async function (email:string):Promise<IUser | null> {
  return await User.findOne({email},{email: 1, role: 1, needsProfileUpdate: 1})
}

export const User = model<IUser, UserModel>('User', UserSchema);

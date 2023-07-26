import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';
import { UserService } from './user.service';

const createJobSeeker: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;

    const result = await UserService.createJobSeeker(userData);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Job Seeker created Successfully!',
      data: result,
    });
  }
);

const createOrganization: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;

    const result = await UserService.createOrganization(userData);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Organization created Successfully!',
      data: result,
    });
  }
);

const createAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;

    const result = await UserService.createAdmin(userData);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin created Successfully!',
      data: result,
    });
  }
);

export const UserController = {
  createJobSeeker,
  createOrganization,
  createAdmin,
};

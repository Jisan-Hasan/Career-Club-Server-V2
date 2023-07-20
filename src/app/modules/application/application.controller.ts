import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { applicationFilterableFields } from './application.constant';
import { IApplication } from './application.interface';
import { ApplicationService } from './application.service';

const createApplication = catchAsync(async (req: Request, res: Response) => {
  const { ...applicationData } = req.body;
  const result = await ApplicationService.createApplication(applicationData);

  sendResponse<IApplication>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application posted Successfully',
    data: result,
  });
});

const getAllApplications = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, applicationFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await ApplicationService.getAllApplications(
    filters,
    paginationOptions
  );

  sendResponse<IApplication[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Applications fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleApplication = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ApplicationService.getSingleApplication(id);

  sendResponse<IApplication>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application retrieved successfully',
    data: result,
  });
});

/* 

const deleteJob = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await JobService.deleteJob(id);

  sendResponse<IJob>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job deleted successfully',
    data: result,
  });
});
 */
export const ApplicationController = {
  createApplication,
  getAllApplications,
  getSingleApplication,
};

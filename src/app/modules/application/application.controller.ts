import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
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

/* 


const updateJob = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  updatedData.isApproved = false;
  const result = await JobService.updateJob(id, updatedData);

  sendResponse<IJob>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job Updated Successfully',
    data: result,
  });
});

const getAllJobs = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, jobFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await JobService.getAllJobs(filters, paginationOptions);

  sendResponse<IJob[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Jobs fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleJob = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await JobService.getSingleJob(id);

  sendResponse<IJob>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job retrieved successfully',
    data: result,
  });
});

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
};

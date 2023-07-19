import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IJob } from './job.interface';
import { JobService } from './job.service';
import pick from '../../../shared/pick';
import { jobFilterableFields } from './job.constant';
import { paginationFields } from '../../../constants/pagination';

const createJob = catchAsync(async (req: Request, res: Response) => {
  const { ...jobData } = req.body;
  const result = await JobService.createJob(jobData);

  sendResponse<IJob>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Job Posted Successfully',
    data: result,
  });
});

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
  
    const result = await JobService.getAllJobs(
      filters,
      paginationOptions
    );
  
    sendResponse<IJob[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Packages fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  });

/* 




const getSinglePackage = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PackageService.getSinglePackage(id);

  sendResponse<IPackage>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package retrieved successfully',
    data: result,
  });
});

const deletePackage = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PackageService.deletePackage(id);

  sendResponse<IPackage>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package deleted successfully',
    data: result,
  });
});

*/

export const JobController = { createJob, updateJob,getAllJobs };

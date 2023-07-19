import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IJob } from './job.interface';
import { JobService } from './job.service';

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

// const createDepartment = catchAsync(async (req: Request, res: Response) => {
//     const { ...academicDepartmentData } = req.body;
//     const result = await AcademicDepartmentService.createDepartment(
//       academicDepartmentData
//     );

//     sendResponse<IAcademicDepartment>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Academic Department created successfully',
//       data: result,
//     });
//   });

export const JobController = { createJob };

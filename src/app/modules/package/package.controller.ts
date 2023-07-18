import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IPackage } from './package.interface';
import { PackageService } from './package.service';

const createPackage = catchAsync(async (req: Request, res: Response) => {
  const { ...packageData } = req.body;
  const result = await PackageService.createPackage(packageData);

  sendResponse<IPackage>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package Created Successfully!',
    data: result,
  });
});

const updatePackage = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PackageService.updatePackage(id, req.body);

  sendResponse<IPackage>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package Updated Successfully',
    data: result,
  });
});



// const createDepartment = catchAsync(async (req: Request, res: Response) => {
//   const { ...academicDepartmentData } = req.body;
//   const result = await AcademicDepartmentService.createDepartment(
//     academicDepartmentData
//   );

//   sendResponse<IAcademicDepartment>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic Department created successfully',
//     data: result,
//   });
// });

// const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, academicDepartmentFilterableFields);
//   const paginationOptions = pick(req.query, paginationFields);

//   const result = await AcademicDepartmentService.getAllDepartments(
//     filters,
//     paginationOptions
//   );

//   sendResponse<IAcademicDepartment[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic departments fetched successfully',
//     meta: result.meta,
//     data: result.data,
//   });
// });

// const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await AcademicDepartmentService.getSingleDepartment(id);

//   sendResponse<IAcademicDepartment>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic Department fetched successfully',
//     data: result,
//   });
// });

// const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await AcademicDepartmentService.deleteDepartment(id);

//   sendResponse<IAcademicDepartment>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic Department deleted successfully',
//     data: result,
//   });
// });

export const PackageController = { createPackage, updatePackage };

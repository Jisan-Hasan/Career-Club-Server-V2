import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICategory } from './category.interface';
import { CategoryService } from './category.service';

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const { ...categoryData } = req.body;
  const result = await CategoryService.createCategory(categoryData);

  sendResponse<ICategory>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category Created Successfully',
    data: result,
  });
});



//   const updatePackage = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await PackageService.updatePackage(id, req.body);

//     sendResponse<IPackage>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Package Updated Successfully',
//       data: result,
//     });
//   });

//   const getAllPackages = catchAsync(async (req: Request, res: Response) => {
//     const filters = pick(req.query, packageFilterableFields);
//     const paginationOptions = pick(req.query, paginationFields);

//     const result = await PackageService.getAllPackages(
//       filters,
//       paginationOptions
//     );

//     sendResponse<IPackage[]>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Packages fetched successfully',
//       meta: result.meta,
//       data: result.data,
//     });
//   });

//   const getSinglePackage = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await PackageService.getSinglePackage(id);

//     sendResponse<IPackage>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Package retrieved successfully',
//       data: result,
//     });
//   });

//   const deletePackage = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await PackageService.deletePackage(id);

//     sendResponse<IPackage>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Package deleted successfully',
//       data: result,
//     });
//   });

export const CategoryController = {
  createCategory,
};

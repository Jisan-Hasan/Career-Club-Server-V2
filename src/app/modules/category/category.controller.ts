// const createPackage = catchAsync(async (req: Request, res: Response) => {
//     const { ...packageData } = req.body;
//     const result = await PackageService.createPackage(packageData);
  
//     sendResponse<IPackage>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Package Created Successfully!',
//       data: result,
//     });
//   });
  
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


export const CategoryController = {}
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PackageController } from './package.controller';
import { PackageValidation } from './package.validation';

const router = express.Router();

router.post(
  '/create-package',
  validateRequest(PackageValidation.createPackageZodSchema),
  PackageController.createPackage
);

router.patch(
    '/:id',
    validateRequest(PackageValidation.updatePackageZodSchema),
    PackageController.updatePackage
)



// router.post(
//   '/create-department',
//   validateRequest(
//     AcademicDepartmentValidation.createAcademicDepartmentZodSchema
//   ),
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   AcademicDepartmentController.createDepartment
// );

// router.get('/:id', AcademicDepartmentController.getSingleDepartment);



// router.delete(
//   '/:id',
//   auth(ENUM_USER_ROLE.SUPER_ADMIN),
//   AcademicDepartmentController.deleteDepartment
// );

// router.get('/', AcademicDepartmentController.getAllDepartments);

export const PackageRoutes = router;

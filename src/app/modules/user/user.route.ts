import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-job-seeker',
  validateRequest(UserValidation.createJobSeekerZodSchema),
  UserController.createJobSeeker
);

router.post(
  '/create-organization',
  validateRequest(UserValidation.createOrganizationZodSchema),
  UserController.createOrganization
);

router.post(
  '/create-admin',
  validateRequest(UserValidation.createAdminZodSchema),
  UserController.createAdmin
);

export const UserRoutes = router;

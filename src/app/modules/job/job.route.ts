import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { JobController } from './job.controller';
import { JobValidation } from './job.validation';

const router = express.Router();

router.post(
  '/create-job',
  auth(ENUM_USER_ROLE.ORGANIZATION),
  validateRequest(JobValidation.createJobZodValidation),
  JobController.createJob
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ORGANIZATION, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(JobValidation.updateJobZodValidation),
  JobController.updateJob
);

router.get('/:id', JobController.getSingleJob);

router.delete(
  '/:id',
  auth(
    ENUM_USER_ROLE.ORGANIZATION,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  JobController.deleteJob
);

router.get('/', JobController.getAllJobs);

export const JobRoutes = router;

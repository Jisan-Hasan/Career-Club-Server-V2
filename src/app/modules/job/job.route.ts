import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { JobController } from './job.controller';
import { JobValidation } from './job.validation';

const router = express.Router();

router.post(
  '/create-job',
  validateRequest(JobValidation.createJobZodValidation),
  JobController.createJob
);

export const JobRoutes = router;

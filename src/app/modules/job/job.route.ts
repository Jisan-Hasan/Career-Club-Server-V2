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

router.patch(
  '/:id',
  validateRequest(JobValidation.updateJobZodValidation),
  JobController.updateJob
);

router.get('/:id', JobController.getSingleJob);

router.delete('/:id', JobController.deleteJob);

router.get('/', JobController.getAllJobs);

export const JobRoutes = router;

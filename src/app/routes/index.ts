import express from 'express';
import { CategoryRoutes } from '../modules/category/category.route';
import { JobRoutes } from '../modules/job/job.route';
import { PackageRoutes } from '../modules/package/package.route';
import { PaymentRoutes } from '../modules/payment/payment.route';
import { ApplicationRoutes } from '../modules/application/application.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/package',
    route: PackageRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
  {
    path: '/job',
    route: JobRoutes,
  },
  {
    path: '/payment',
    route: PaymentRoutes,
  },
  {
    path: '/application',
    route: ApplicationRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;

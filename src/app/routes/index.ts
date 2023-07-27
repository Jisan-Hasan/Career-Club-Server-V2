import express from 'express';
import { ApplicationRoutes } from '../modules/application/application.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { JobRoutes } from '../modules/job/job.route';
import { PackageRoutes } from '../modules/package/package.route';
import { PaymentRoutes } from '../modules/payment/payment.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';

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
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;

import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { paymentSearchableFields } from './payment.constant';
import { IPayment, IPaymentFilters } from './payment.interface';
import { Payment } from './payment.model';

const createPayment = async (payload: IPayment): Promise<IPayment | null> => {
  const result = (await Payment.create(payload)).populate('package');
  return result;
};

const getAllPayments = async (
  filters: IPaymentFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IPayment[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: paymentSearchableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Payment.find(whereConditions)
    .populate('package')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Payment.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSinglePayment = async (id: string): Promise<IPayment | null> => {
  const result = await Payment.findById(id).populate('package');
  return result;
};

export const PaymentService = {
  createPayment,
  getAllPayments,
  getSinglePayment,
};

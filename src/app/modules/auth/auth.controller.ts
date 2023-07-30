import { Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../../config';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';
import { IGetTokenResponse, IRefreshTokenResponse } from './auth.interface';

const getToken = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  const result = await AuthService.getToken(email);
  const { refreshToken, ...others } = result;

  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };
  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<IGetTokenResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Auth Token Successfully',
    data: others,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  const result = await AuthService.refreshToken(refreshToken);

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Refresh Token Successfull',
    data: result,
  });
});

export const AuthController = {
  refreshToken,
  getToken,
};

export type IGetTokenResponse = {
  accessToken: string;
  refreshToken?: string;
  needsProfileUpdate: boolean;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

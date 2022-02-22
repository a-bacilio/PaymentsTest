import logger from '../../shared/logger/appLogger';
import { UserIdType } from '../../types/users/user';
import { createAuthToken, createRefreshToken } from '../../utils/tokenManager';

export const authCreateTokenService = (
  userId: string | UserIdType
): { authToken: string; refreshToken: string } => {
  try {
    return {
      authToken: createAuthToken({ id: userId }),
      refreshToken: createRefreshToken({ id: userId }),
    };
  } catch (error: any) {
    logger.error('Error creating tokens auth token', {
      instance: 'services',
      fn: 'authCreateTokenService',
      trace: error.message,
    });
    throw new Error(`'Error creating tokens auth token' ${error.message}`);
  }
};

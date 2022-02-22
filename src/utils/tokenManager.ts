import jwt from 'jsonwebtoken';

export const createAuthToken = (payload: {}): string => {
  return jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}`, {
    expiresIn: '24h',
  });
};

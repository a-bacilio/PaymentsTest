import logger from '../../shared/logger/appLogger';
import { userModel } from '../entity/models/userModel';
import { ISchemaUser } from '../entity/types/user';
import { findOneResourceByField } from '../../shared/factory/findOneResourceByField';

export const getOneUserByEmail = async (
  email: string
): Promise<ISchemaUser | null> => {
  try {
    const user: ISchemaUser | null = await findOneResourceByField(userModel)({
      email,
    });

    return user;
  } catch (error: any) {
    logger.log(`error getting the user with email: ${email}`, {
      service: 'getOneUserByEmail',
      trace: error.message,
    });
    throw new Error(`error getting the user with email${email}`);
  }
};

import { userModel } from '../entity/models/userModel';
import { createResource } from '../../shared/factory/createResource';
import Logger from '../../shared/logger/appLogger';
import { ICreateUser } from '../../auth/types/manageUser';
import { ISchemaUser } from '../entity/types/user';
import { encryptPassword } from '../../utils/passwordManager';

export const createUserService = async (
  userRequest: ICreateUser
): Promise<ISchemaUser> => {
  try {
    userRequest['password'] = await encryptPassword(userRequest.password);
    const user = await createResource(userModel)(userRequest);
    return user as ISchemaUser;
  } catch (error: any) {
    Logger.error(`error creating user with email ${userRequest.email}`, {
      service: 'authCreateUserService',
      trace: error.message,
    });
    throw new Error(`error creating user with email ${userRequest.email}`);
  }
};

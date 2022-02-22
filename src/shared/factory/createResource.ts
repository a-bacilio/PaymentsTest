import { Model as ModelType } from 'mongoose';
import { ISchemaUser } from '../../types/users/user';

export const createResource =
  <K extends ModelType<ISchemaUser>>(Model: K) =>
  async <T>(resource: T): Promise<ISchemaUser> => {
    const newResource = new Model(resource);
    return await newResource.save();
  };

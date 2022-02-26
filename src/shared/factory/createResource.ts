import { Model as ModelType } from 'mongoose';
import { ISchemaUser } from '../../users/entity/types/user';

export const createResource =
  <K extends ModelType<ISchemaUser>>(Model: K) =>
  async <T>(resource: T): Promise<ISchemaUser> => {
    const newResource = new Model(resource);
    return await newResource.save();
  };

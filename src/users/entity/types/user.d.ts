import { Types } from 'mongoose';
import { ICreateUser } from '../../../auth/types/manageUser';

export interface ISchemaUser extends ICreateUser {
  id: UserIdType;
  avatarUrl?: string;
  role?: string;
  addresses?: Types.Array<string>;
}

export type UserIdType = {
  _id: Types.ObjectId;
};

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export type ILoginUser = Omit<ICreateUser, 'name'>;

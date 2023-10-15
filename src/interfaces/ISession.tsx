import { IUser } from '@/interfaces/IUser';

export interface ISession {
  user: IUser;
  token: string;
}

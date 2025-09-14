import { TypeTransaction } from './@types';
import User from './user';

export default interface Transaction {
  id: string;
  description: string;
  value: number;
  type: TypeTransaction;
  date: Date;
  user: User;
}

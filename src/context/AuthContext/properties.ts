import { ReactNode } from 'react';
import User from '../../models/user';

export interface AuthProviderProperties {
  children: ReactNode;
}

export interface AuthContextProperties {
  user: User;
  signUp: (name: string, email: string, password: string) => Promise<void>;
}

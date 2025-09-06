import { ReactNode } from 'react';
import User from '../../models/user';

export interface AuthProviderProperties {
  children: ReactNode;
}

export interface AuthContextProperties {
  user?: User;
  signed: boolean;
  loadingAuth: boolean;
  signUp: (name: string, email: string, password: string) => Promise<void>;
}

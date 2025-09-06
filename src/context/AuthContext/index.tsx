import { createContext, useState } from 'react';
import { AuthContextProperties, AuthProviderProperties } from './properties';
import User from '../../models/user';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext<AuthContextProperties>({
  user: undefined,
  signed: false,
  loadingAuth: false,
  signIn: async () => {},
  signUp: async () => {},
});

function AuthProvider({ children }: AuthProviderProperties) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();

  async function signIn(email: string, password: string) {
    try {
      setLoadingAuth(true);

      const response = await api.post('/login', { email, password });

      setLoadingAuth(false);

      if (response.status === 200 || response.status === 201) {
        const { id, name, token } = response.data;

        const data: User = {
          id,
          name,
          token,
          email,
        };

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(data);
      } else {
        console.warn('Login não realizado', response.status);
      }
    } catch (error) {
      console.error(error);
      setLoadingAuth(false);
    }
  }

  async function signUp(name: string, email: string, password: string) {
    try {
      setLoadingAuth(true);
      const response = await api.post('/users', { name, password, email });

      setLoadingAuth(false);

      if (response.status === 200 || response.status === 201) {
        navigation.goBack();
      } else {
        console.warn('Cadastro não realizado', response.status);
      }
    } catch (error) {
      console.error(error);
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loadingAuth, signIn, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

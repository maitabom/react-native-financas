import { createContext, useState } from 'react';
import { AuthContextProperties, AuthProviderProperties } from './properties';
import User from '../../models/user';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext<AuthContextProperties>({
  user: { name: '' },
  signUp: async () => {},
});

function AuthProvider({ children }: AuthProviderProperties) {
  const [user, setUser] = useState<User>({
    name: 'Valentim',
  });

  const navigation = useNavigation();

  async function signUp(name: string, email: string, password: string) {
    try {
      const response = await api.post('/users', { name, password, email });

      if (response.status === 200 || response.status === 201) {
        navigation.goBack();
      } else {
        console.warn('Cadastro não realizado', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

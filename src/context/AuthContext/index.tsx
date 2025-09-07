import { createContext, useEffect, useState } from 'react';
import { AuthContextProperties, AuthProviderProperties } from './properties';
import User from '../../models/user';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext<AuthContextProperties>({
  user: undefined,
  signed: false,
  loading: false,
  loadingAuth: false,
  signIn: async () => { },
  signUp: async () => { },
});

function AuthProvider({ children }: AuthProviderProperties) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage() {
      try {
        const storageUser = await AsyncStorage.getItem('@user.token.finance');
        if (!storageUser) {
          setUser(undefined);
          return;
        }

        const response = await api.get('/me', {
          headers: {
            Authorization: `Bearer ${storageUser}`, // corrigido typo
          },
        });

        if (response.status === 200 || response.status === 201) {
          api.defaults.headers.Authorization = `Bearer ${storageUser}`;
          const { id, name, email } = response.data;
          setUser({ id, name, token: storageUser, email });
        } else {
          setUser(undefined);
        }
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
        setUser(undefined);
      }
    }

    loadStorage();
    setLoading(false);
  }, []);

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

        await AsyncStorage.setItem('@user.token.finance', token);

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
      value={{ signed: !!user, user, loading, loadingAuth, signIn, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

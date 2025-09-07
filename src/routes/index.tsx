import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Container } from './styles';
import { ActivityIndicator } from 'react-native';

function Routes() {

  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color='#141414' />
      </Container>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;

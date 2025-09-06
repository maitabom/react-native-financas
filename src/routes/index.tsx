import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Routes() {
  const loading = false;

  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;

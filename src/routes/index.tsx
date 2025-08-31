import { Text, View } from 'react-native';
import AuthRoutes from './auth.routes';

function Routes() {
  const loading = false;
  const signed = false;

  return signed ? (
    <View>
      <Text>Teste</Text>
    </View>
  ) : (
    <AuthRoutes />
  );
}

export default Routes;

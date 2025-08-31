import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: { backgroundColor: '#3b3ddf' },
          headerTintColor: '#FFF',
          headerTitle: 'Voltar',
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;

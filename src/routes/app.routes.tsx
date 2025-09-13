import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import NewTransacion from '../pages/NewTransaction';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: '#FFF', paddingBlock: 20 },
        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#fff',
        drawerInactiveBackgroundColor: '#f0f2ff',
        drawerInactiveTintColor: '#121212',
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Nova transação" component={NewTransacion} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;

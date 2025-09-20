import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Home from '../pages/Home';
import NewTransacion from '../pages/NewTransaction';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

const renderDrawerContent = (props: DrawerContentComponentProps) => (
  <CustomDrawer {...props} />
);

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={renderDrawerContent}
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
      <AppDrawer.Screen name="Perfil do usuário" component={Profile} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;

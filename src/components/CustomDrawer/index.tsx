import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useContext } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function CustomDrawer(properties: DrawerContentComponentProps) {
  const { user } = useContext(AuthContext);

  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.user} numberOfLines={1}>
          {user && user.name}
        </Text>
      </View>
      <View style={styles.menu}>
        <DrawerItemList {...properties} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  menu: {
    marginHorizontal: 10,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    marginTop: 14,
  },
  user: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 14,
    paddingHorizontal: 20,
  },
});

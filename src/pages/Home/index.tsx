import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function Home() {
  const { signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Bem-vindo ao sistema</Text>
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
}

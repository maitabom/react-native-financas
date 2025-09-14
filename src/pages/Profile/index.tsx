import { useContext } from 'react';
import Header from '../../components/Header';
import {
  Container,
  LogoutButton,
  LogoutText,
  Message,
  Name,
  NewLink,
  NewText,
} from './styles';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation<any>();

  return (
    <Container>
      <Header title="Meu perfil" />
      <Message>Seja bem-vindo ao sistema.</Message>
      <Name numberOfLines={1}>{user?.name}</Name>
      <NewLink
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Nova transação')}
      >
        <NewText>Fazer Registro</NewText>
      </NewLink>

      <LogoutButton activeOpacity={0.8} onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  );
}

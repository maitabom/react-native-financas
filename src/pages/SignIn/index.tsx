import { useNavigation } from '@react-navigation/native';
import {
  AreaInput,
  Background,
  Container,
  Input,
  Logo,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './styles';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ActivityIndicator } from 'react-native';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext);

  const navigation = useNavigation<any>();

  async function handleLogin() {
    await signIn(email, password);
  }

  return (
    <Background>
      <Container behavior="padding" enabled>
        <Logo source={require('../../assets/Logo.png')} />
        <AreaInput>
          <Input
            placeholder="Seu e-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Sua senha"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </AreaInput>
        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}

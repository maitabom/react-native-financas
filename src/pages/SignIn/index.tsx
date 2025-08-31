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

export default function SignIn() {
  const navigation = useNavigation<any>();

  return (
    <Background>
      <Container behavior="padding" enabled>
        <Logo source={require('../../assets/Logo.png')} />
        <AreaInput>
          <Input placeholder="Seu e-mail" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>
        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}

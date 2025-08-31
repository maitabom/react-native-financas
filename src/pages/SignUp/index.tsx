import { useContext } from 'react';
import {
  AreaInput,
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText,
} from './styles';
import { AuthContext } from '../../context/AuthContext';

export default function SignUp() {
  const user = useContext(AuthContext);

  function handledSignUp() {
    console.log(user);
  }

  return (
    <Background>
      <Container behavior="padding" enabled>
        <AreaInput>
          <Input placeholder="Seu nome" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Seu e-mail" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handledSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}

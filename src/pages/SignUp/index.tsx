import { useContext, useState } from 'react';
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
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { user, signUp } = useContext(AuthContext);

  async function handledSignUp() {
    await signUp(nome, email, senha);
  }

  return (
    <Background>
      <Container behavior="padding" enabled>
        <AreaInput>
          <Input
            placeholder="Seu nome"
            value={nome}
            onChangeText={text => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Seu e-mail"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={text => setSenha(text)}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handledSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}

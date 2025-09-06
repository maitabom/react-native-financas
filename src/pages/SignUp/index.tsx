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
import { ActivityIndicator } from 'react-native';

export default function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { loadingAuth, signUp } = useContext(AuthContext);

  async function handledSignUp() {
    if (nome === '' || email === '' || senha === '') {
      return;
    }

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
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}

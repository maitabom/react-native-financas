import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { Background, Input, SubmitButton, SubmitText } from './styles';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  safeArea: {
    marginTop: 14,
    alignItems: 'center',
  },
});

type TypeTransaction = 'receita' | 'despesa';

export default function NewTransacion() {
  const [labelInput, setLabelInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState<TypeTransaction>('receita');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <Background>
        <Header title="Nova transação" />
        <SafeAreaView style={styles.safeArea}>
          <Input
            placeholder="Descrição da transação"
            value={labelInput}
            onChangeText={text => setLabelInput(text)}
          />
          <Input
            placeholder="Valor da transação"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={text => setValueInput(text)}
          />
          <SubmitButton activeOpacity={0.8}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}

import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { Background, Input, SubmitButton, SubmitText } from './styles';
import {
  Alert,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { useState } from 'react';
import TransactionTypes from '../../components/TransactionTypes';
import api from '../../services/api';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

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

  const navigation = useNavigation<any>();

  function handleSubmit() {
    Keyboard.dismiss();

    if (labelInput === '' || isNaN(parseFloat(valueInput)) || type === null) {
      Alert.alert('Atenção', 'Preencha todos os campos', [
        { text: 'OK', style: 'cancel' },
      ]);
      return;
    }

    Alert.alert(
      'Confirme os dados',
      `A transação do tipo ${type}, ${labelInput} de valor ${parseFloat(
        valueInput,
      ).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}. Confirma o registro?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => handleSave(),
        },
      ],
    );
  }

  async function handleSave() {
    Keyboard.dismiss();

    await api.post('/receive', {
      description: labelInput,
      value: Number(valueInput),
      type: type,
      date: format(new Date(), 'dd/MM/yyyy'),
    });

    setLabelInput('');
    setValueInput('');

    navigation.navigate('Home');
  }

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

          <TransactionTypes type={type} onTypeChanged={item => setType(item)} />

          <SubmitButton activeOpacity={0.8} onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}

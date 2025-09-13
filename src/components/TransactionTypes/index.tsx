import {
  RegisterContainer,
  RegisterTypeButton,
  RegisterTypeLabel,
} from './styles';
import { TransactionTypesProperties, TypeTransaction } from './properties';
import Feather from '@react-native-vector-icons/feather';
import { useState } from 'react';

export default function TransactionTypes(
  properties: TransactionTypesProperties,
) {
  const [typeChecked, setTypeChecked] = useState(properties.type);

  function changeType(type: TypeTransaction) {
    setTypeChecked(type);

    if (properties.onTypeChanged) {
      properties.onTypeChanged(type);
    }
  }

  return (
    <RegisterContainer>
      <RegisterTypeButton
        checked={typeChecked === 'receita'}
        activeOpacity={0.95}
        onPress={() => changeType('receita')}
      >
        <Feather name="arrow-up" size={25} color="#121212" />
        <RegisterTypeLabel>Receita</RegisterTypeLabel>
      </RegisterTypeButton>
      <RegisterTypeButton
        checked={typeChecked === 'despesa'}
        activeOpacity={0.95}
        onPress={() => changeType('despesa')}
      >
        <Feather name="arrow-down" size={25} color="#121212" />
        <RegisterTypeLabel>Despesa</RegisterTypeLabel>
      </RegisterTypeButton>
    </RegisterContainer>
  );
}

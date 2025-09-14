import Feather from '@react-native-vector-icons/feather';
import { HistoricItemListProperties } from './properties';
import { Container, IconView, Type, TypeText, ValorText } from './styles';
import { Alert, TouchableWithoutFeedback } from 'react-native';

export default function HistoricItemList(
  properties: HistoricItemListProperties,
) {
  function handleDeleteItem() {
    Alert.alert(
      'Atenção',
      'Você tem certeza de que deseja excluir este registro?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            if (properties.onDelete) {
              properties.onDelete(properties.data.id);
            }
          },
        },
      ],
    );
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Type>
          <IconView type={properties.data.type}>
            <Feather
              name={
                properties.data.type === 'despesa' ? 'arrow-down' : 'arrow-up'
              }
              size={20}
              color="#FFF"
            />
            <TypeText>{properties.data.type}</TypeText>
          </IconView>
        </Type>

        <ValorText>
          {properties.data.value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}

import Feather from '@react-native-vector-icons/feather';
import { HistoricItemListProperties } from './properties';
import { Container, IconView, Type, TypeText, ValorText } from './styles';

export default function HistoricItemList(
  properties: HistoricItemListProperties,
) {
  return (
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
  );
}

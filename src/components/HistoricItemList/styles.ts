import styled from 'styled-components/native';
import { TypeTransaction } from '../../models/@types';

interface IconViewProperties {
  type: TypeTransaction;
}

export const Container = styled.View`
  background-color: #f0f3ff;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
`;

export const Type = styled.View`
  flex-direction: row;
`;

export const TypeText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-style: italic;
  text-transform: capitalize;
`;

export const IconView = styled.View<IconViewProperties>`
  flex-direction: row;
  background-color: ${props =>
    props.type === 'despesa' ? '#c62c36' : '#049301'};
  padding: 4px 8px;
  border-radius: 8px;
  margin-bottom: 4px;
  gap: 4px;
`;

export const ValorText = styled.Text`
  color: #121212;
  font-size: 22px;
`;

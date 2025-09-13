import styled from 'styled-components/native';

interface TouchableSelect {
  checked: boolean;
}

export const RegisterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity<TouchableSelect>`
  background-color: ${props => (props.checked ? '#fff' : '#e7e7e7')};
  width: 45%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 45px;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${props => (props.checked ? '#3b3dbf' : 'transparent')};
  margin-bottom: 14px;
  gap: 8px;
`;

export const RegisterTypeLabel = styled.Text`
  font-size: 17px;
`;

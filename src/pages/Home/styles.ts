import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;
`;

export const Area = styled.View`
  background-color: #fff;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  flex-direction: row;
  padding: 0 14px;
  align-items: baseline;
  margin-top: 24px;
  padding-top: 14px;
`;

export const Title = styled.Text`
  margin-left: 4px;
  margin-bottom: 14px;
  color: #121212;
  font-weight: bold;
  font-size: 18px;
`;

export const List = styled.FlatList`
  flex: 1;
  background-color: #fff;
`;

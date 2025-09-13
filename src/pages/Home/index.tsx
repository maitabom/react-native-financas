import { Background, ListBalance } from './styles';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Header from '../../components/Header';
import api from '../../services/api';
import ResumeTransaction from '../../models/resume-transaction';
import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';

export default function Home() {
  const [listBalance, setListBalance] = useState<ResumeTransaction[]>([]);
  const [dateMoviments, setDateMoviments] = useState<Date>(new Date());

  const isFocus = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getMoviments() {
      let dateFormat = format(dateMoviments, 'dd/MM/yyyy');

      const response = await api.get<ResumeTransaction[]>('/balance', {
        params: {
          date: dateFormat,
        },
      });

      if (isActive) {
        const balances = response.data;
        setListBalance(balances);
      }
    }

    getMoviments();

    return () => {
      isActive = false;
    };
  });

  return (
    <Background>
      <Header title="Minhas movimentações" />
      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => (item as ResumeTransaction).tag}
        renderItem={({ item }) => (
          <BalanceItem data={item as ResumeTransaction} />
        )}
      />
    </Background>
  );
}

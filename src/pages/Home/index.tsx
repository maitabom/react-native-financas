import { Area, Background, List, ListBalance, Title } from './styles';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Header from '../../components/Header';
import api from '../../services/api';
import ResumeTransaction from '../../models/resume-transaction';
import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import { TouchableOpacity } from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import Transaction from '../../models/transaction';
import HistoricItemList from '../../components/HistoricItemList';

export default function Home() {
  const [listBalance, setListBalance] = useState<ResumeTransaction[]>([]);
  const [dateMoviments, setDateMoviments] = useState<Date>(new Date());
  const [moviments, setMoviments] = useState<Transaction[]>([]);

  const isFocus = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getMoviments() {
      let dateFormat = format(dateMoviments, 'dd/MM/yyyy');

      const receives = await api.get<Transaction[]>('/receives', {
        params: {
          date: dateFormat,
        },
      });

      const response = await api.get<ResumeTransaction[]>('/balance', {
        params: {
          date: dateFormat,
        },
      });

      if (isActive) {
        const balances = response.data;
        const transactions = receives.data;

        setListBalance(balances);
        setMoviments(transactions);
      }
    }

    getMoviments();

    return () => {
      isActive = false;
    };
  }, [dateMoviments, isFocus]);

  const listContentContainerStyle = { paddingBottom: 20 };

  async function handleDelete(transactionId: string) {
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: transactionId,
        },
      });

      setDateMoviments(new Date());
    } catch (err) {
      console.error(err);
    }
  }

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

      <Area>
        <TouchableOpacity>
          <Feather name="calendar" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Últimas movimentações</Title>
      </Area>

      <List
        showsVerticalScrollIndicator={false}
        data={moviments}
        keyExtractor={(item: Transaction) => item.id}
        contentContainerStyle={listContentContainerStyle}
        renderItem={({ item }: { item: Transaction }) => (
          <HistoricItemList data={item} onDelete={handleDelete} />
        )}
      />
    </Background>
  );
}

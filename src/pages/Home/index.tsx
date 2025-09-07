import { Background } from './styles';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Header from '../../components/Header';
import api from '../../services/api';
import ResumeTransaction from '../../models/resume-transaction';

export default function Home() {
  const [listBalance, setListBalance] = useState<ResumeTransaction[]>([]);
  const [dateMoviments, setDateMoviments] = useState<Date>(new Date());

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
    </Background>
  );
}

import { Balance, Container, Label } from './styles';
import { BalanceItemPropertes } from './properties';
import { useMemo } from 'react';
import { LabelBalance } from './models';

export default function BalanceItem(properties: BalanceItemPropertes) {
  const labelName = useMemo<LabelBalance>(() => {
    let label: LabelBalance;

    switch (properties.data.tag) {
      case 'saldo':
        label = {
          label: 'Saldo atual',
          color: '#3b3dbf',
        };

        break;

      case 'receita':
        label = {
          label: 'Entradas de hoje',
          color: '#00b94a',
        };

        break;

      case 'despesa':
        label = {
          label: 'Saídas de hoje',
          color: '#ef463a',
        };
    }

    return label;
  }, [properties.data]);

  return (
    <Container backgroundColor={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance>
        {properties.data.saldo.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Balance>
    </Container>
  );
}

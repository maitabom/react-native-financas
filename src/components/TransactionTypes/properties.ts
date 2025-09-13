export type TypeTransaction = 'receita' | 'despesa';

export interface TransactionTypesProperties {
  type: TypeTransaction;
  onTypeChanged?: (type: TypeTransaction) => void;
}

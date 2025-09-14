import Transaction from '../../models/transaction';

export interface HistoricItemListProperties {
  data: Transaction;
  onDelete?: (transacionId: string) => void;
}

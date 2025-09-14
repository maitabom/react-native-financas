import { TypeTransaction } from "../../models/@types";

export interface TransactionTypesProperties {
  type: TypeTransaction;
  onTypeChanged?: (type: TypeTransaction) => void;
}

export default interface ResumeTransaction {
  saldo: number;
  tag: 'saldo' | 'receita' | 'despesa';
}

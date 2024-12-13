export interface IOrder {
  id: number;
  amountTokens: number;
  amountDollars: number;
  status: 'Processing' | 'Completed';
  createdAt: string;
}

export type OrderAmounts = Pick<IOrder, 'amountTokens' | 'amountDollars'>;

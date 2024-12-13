import { api } from '@/app/api';

import { IOrder, OrderAmounts } from '../model';

export const createOrder = async (amounts: OrderAmounts): Promise<IOrder> => {
  try {
    const res = await api.post('/orders', amounts);

    return res.data;
  } catch (error) {
    /**
     * Использую обычный throw new Error
     * Но в реальной разработке чаще всего отлавливаем ошибки через ErrorBoundary
     */
    throw new Error(error as string);
  }
};

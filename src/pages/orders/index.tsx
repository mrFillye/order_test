import { socket } from '@/app/api';
import { useOrdersStore } from '@/app/context/OrderContext';
import { IOrder } from '@/entities/order/model';
import { CreateOrderForm } from '@/features/order/ui';
import { OrderList } from '@/widgets/ui';
import { useEffect } from 'react';

import styles from './index.module.scss';

export const Orders = () => {
  const { actions } = useOrdersStore();

  const { setTokenRate, setOrders, addOrder, updateOrder } = actions;

  useEffect(() => {
    socket.on('tokenRate', (rate: string) => {
      setTokenRate(parseFloat(rate));
    });

    socket.on('orderList', (orders: IOrder[]) => {
      setOrders(orders);
    });

    socket.on('newOrder', (order: IOrder) => {
      addOrder(order);
    });

    socket.on('orderUpdated', (order: IOrder) => {
      updateOrder(order);
    });

    return () => {
      socket.off('tokenRate');
      socket.off('orderList');
      socket.off('newOrder');
      socket.off('orderUpdated');
    };
  }, []);

  return (
    <div className={styles.page}>
      <CreateOrderForm />
      <OrderList />
    </div>
  );
};

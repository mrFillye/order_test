import { orderStore } from '@/entities/order/model';
import { useLocalObservable } from 'mobx-react';
import { FC, createContext, PropsWithChildren, useContext } from 'react';

/**
 * Контекст для удобного шаринга данных между компонентов
 * и использовая useOrdersStore хука для лучшей читаемости кода
 */

interface OrderContextProps {
  model: typeof orderStore.model;
  actions: typeof orderStore.actions;
  computes: typeof orderStore.computes;
}

const OrdersContext = createContext<OrderContextProps | undefined>(undefined);

export const OrdersProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useLocalObservable(() => orderStore);

  return (
    <OrdersContext.Provider value={store}>{children}</OrdersContext.Provider>
  );
};

export const useOrdersStore = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrdersStore must be used within an OrdersProvider');
  }
  return context;
};

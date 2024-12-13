import { action, observable } from 'mobx';
import { IOrder } from './interface';

/**
 * Проект выполнен по FSD, entity model - бизнес модель,
 * в данном случае order. Добавил здесь tokenRate, так как
 * у него нет структуру (это число) решил не делать отдельный стор
 * дабы не плодить код
 * Считаю что в обстоятельствах реальной разработки -
 * он бы потребовлся
 */

const model = {
  orders: observable.box<IOrder[]>([]),
  tokenRate: observable.box<number>(0),
};

export const orderStore = {
  model,
  actions: {
    addOrder: action((order: IOrder) => {
      const orders = model.orders.get();

      if (!!orders.length) {
        model.orders.set([order, ...orders]);
        return;
      }

      model.orders.set([order]);
    }),
    setOrders: action((orders: IOrder[]) => {
      model.orders.set(orders);
    }),
    updateOrder: action((updatedOrder: IOrder) => {
      const currentOrders = model.orders.get();

      const orderIndex = currentOrders.findIndex(
        ({ id }) => id === updatedOrder.id
      );

      if (orderIndex > -1) {
        currentOrders[orderIndex] = updatedOrder;
        model.orders.set([...currentOrders]);
      }
    }),
    setTokenRate: action((rate: number) => {
      model.tokenRate.set(rate);
    }),
  },
  computes: {
    get ordersList() {
      return model.orders.get();
    },
    get tokenRate() {
      return model.tokenRate.get();
    },
  },
};

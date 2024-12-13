import { useOrdersStore } from '@/app/context/OrderContext';
import { OrderItem } from '@/entities/order/ui';
import { Card } from '@/shared/components/Card';
import { observer } from 'mobx-react';
import styles from './index.module.scss';

const OrderListWidget = () => {
  const {
    computes: { ordersList },
  } = useOrdersStore();

  if (!ordersList.length) {
    return (
      <div className={styles.ordersWrapper}>
        <h4>Orders List</h4>
        <Card className={styles.ordersCard}>
          <p>List is empty</p>
        </Card>
      </div>
    );
  }

  /**
   * Так же хорошей практикой явялется
   * обработка состояний запроса в ui (isLoading, isError )
   * например: isLoading && Loader
   */

  return (
    <div className={styles.ordersWrapper}>
      <h4>Orders list</h4>
      <Card className={styles.ordersCard}>
        {ordersList.map(
          ({ id, amountDollars, amountTokens, status, createdAt }) => (
            <OrderItem
              key={id}
              amountDollars={amountDollars}
              amountTokens={amountTokens}
              status={status}
              createdAt={createdAt}
            />
          )
        )}
      </Card>
    </div>
  );
};

export const OrderList = observer(OrderListWidget);

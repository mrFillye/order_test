import { OrderItem } from '@/entities/order/ui';
import { Card } from '@/shared/components/Card';
import styles from './index.module.scss';

const mocks = [
  {
    id: 1,
    amountTokens: 100,
    amountDollars: 200,
    createdAt: '17:11 1.11.23',
    status: 'Processing',
  },
  {
    id: 2,
    amountTokens: 100,
    amountDollars: 200,
    createdAt: '17:11 1.11.23',
    status: 'Processing',
  },
  {
    id: 3,
    amountTokens: 100,
    amountDollars: 200,
    createdAt: '17:11 1.11.23',
    status: 'Processing',
  },
];

export const OrderList = () => {
  return (
    <div className={styles.ordersWrapper}>
      <h4>Order list</h4>
      <Card className={styles.ordersCard}>
        {mocks.map(({ id, amountDollars, amountTokens, status, createdAt }) => (
          <OrderItem
            key={id}
            amountDollars={amountDollars}
            amountTokens={amountTokens}
            status={status as 'Processing' | 'Completed'}
            createdAt={createdAt}
          />
        ))}
      </Card>
    </div>
  );
};

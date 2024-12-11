import { CreateOrderForm } from '@/features/order/ui';
import { OrderList } from '@/widgets/ui';

import styles from './index.module.scss';

export const Orders = () => {
  return (
    <div className={styles.page}>
      <CreateOrderForm />
      <OrderList />
    </div>
  );
};

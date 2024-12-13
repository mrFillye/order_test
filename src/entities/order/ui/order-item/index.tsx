import { Card } from '@/shared/components/Card';
import { formateDate } from '@/shared/utils/dates';
import classNames from 'classnames';
import { FC } from 'react';
import { IOrder } from '../../model';
import styles from './index.module.scss';

type OrderItemProps = Omit<IOrder, 'id'>;

export const OrderItem: FC<OrderItemProps> = ({
  amountTokens,
  amountDollars,
  status,
  createdAt,
}) => (
  <Card className={styles.orderItem}>
    <ul>
      <li className={styles.orderInfo}>
        <div className={styles.orderInfoWrapper}>
          <span className={classNames(styles.orderStatus, styles[status])}>
            {status}
          </span>
          <div className={styles.orderValues}>
            <p>USD: {amountDollars} $</p>
            <p>Token: {amountTokens} Tokens</p>
          </div>
        </div>
        <div className={styles.orderCreatedAt}>{formateDate(createdAt)}</div>
      </li>
    </ul>
  </Card>
);

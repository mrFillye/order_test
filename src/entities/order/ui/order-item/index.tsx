import { Card } from '@/shared/components/Card';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './index.module.scss';

interface IOrderItemProps {
  amountTokens: number;
  amountDollars: number;
  status: 'Processing' | 'Completed';
  createdAt: string;
}

export const OrderItem: FC<IOrderItemProps> = ({
  amountTokens,
  amountDollars,
  status,
  createdAt,
}) => {
  return (
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
          {/* TODO: сделать utils функцию */}
          <div className={styles.orderCreatedAt}>{createdAt}</div>
        </li>
      </ul>
    </Card>
  );
};

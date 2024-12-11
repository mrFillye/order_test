import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

interface ICard {
  children: ReactNode;
  className?: string;
}

export const Card: FC<ICard> = ({ children, className }) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};

import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './card.module.scss';

interface CardProps {
  high?: boolean;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ children, high }) => (
  <div
    className={clsx(
      styles['card'],
      {
        [styles['shadow-high']]: high,
      }
    )}
  >
    {children}
  </div>
);

export default Card;
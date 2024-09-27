import { FC } from 'react';
import Check from '@/assets/icons/tick-circle.svg';
import styles from './checkList.module.scss';
import clsx from 'clsx';

interface CheckListProps {
  list: string[];
  strong?: boolean;
  onCard?: boolean;
}

const CheckList: FC<CheckListProps> = ({ list, strong, onCard }) => (
  <div className={styles['checklist']}>
    <ul className={clsx({ [styles['card']]: onCard })}>
      {list.map(item => (
        <li key={item}>
          <img src={Check} alt='check' />
          <span
            className={clsx({
              [styles['strong']]: strong
            })}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default CheckList;
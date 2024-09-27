import { FC } from 'react';
import { CheckList } from '@/components/molecules';
import { Button } from '@/components/atoms';
import Box from '@/assets/box.svg';
import styles from './planCard.module.scss';

interface PlanCardProps {
  title: string;
  benefits: string[];
  price: string;
  time: string;
}

const PlanCard: FC<PlanCardProps> = ({
  title,
  benefits,
  price,
  time,
}) => (
  <div className={styles['plan-card']}>
    <div className={styles['plan-card-head']}>
      <div className={styles['plan-card-image']}>
        <img src={Box} alt='plan image'/>
      </div>

      <h3>{title}</h3>

      <CheckList list={benefits} />
    </div>

    <div className={styles['plan-card-bottom']}>
      <p>
        {price}
        {time && <><span className={styles['slash']}> / </span><span>{time}</span></>}
      </p>

      <Button size='sm'>
        Select
      </Button>
    </div>
  </div>
);

export default PlanCard;
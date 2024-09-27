import { FC } from 'react';
import Star from '@/assets/icons/star.svg';
import styles from './testimonialCard.module.scss';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  user: string;
  rate: number;
  text: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  avatar,
  name,
  user,
  rate,
  text,
}) => (
  <div className={styles['testimonial-card']}>
    <div className={styles['testimonial-card-head']}>
      <div className={styles['testimonial-card-head-image']}>
        <img src={avatar} alt='user avatar' />
      </div>

      <div className={styles['testimonial-card-head-data']}>
        <h3>{name}</h3>
        <div className={styles['testimonial-card-head-data_user']}>
          <p>{user}</p>
          <span>
            {rate}
            <img src={Star} alt='stars' />
          </span>
        </div>
      </div>
    </div>

    <p className={styles['testimonial-card-text']}>
      {text}
    </p>
  </div>
);

export default TestimonialCard;
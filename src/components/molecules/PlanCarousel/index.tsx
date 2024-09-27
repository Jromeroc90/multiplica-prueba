import styles from './planCarousel.module.scss';
import { FC, PropsWithChildren } from 'react';

const PlanCarousel: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles['plan-carousel']}>
    <div className={styles['plan-carousel-wrapper']}>
      {children}
    </div>
  </div>
);

    export default PlanCarousel;
import { FC, Fragment } from 'react';
import { BgIcon, Card } from '@/components/atoms';
import { heroHighs } from '@/util/constants';
import styles from './heroCard.module.scss';

const HeroCard: FC = () => (
  <div className={styles['hero-card']}>
    <Card>
      <div className={styles['hero-card-content']}>
        {heroHighs.map((item, index) => (
          <Fragment key={item.title}>
            <div className={styles['hero-card-content-item']}>
              <BgIcon icon={item.icon}/>
              <div className={styles['hero-card-content-item_description']}>
                <span>{item.title}</span>
                <h4>{item.description}</h4>
              </div>
            </div>
            {index !== heroHighs.length - 1 && (
              <div className={styles['hero-card-content-separator']} />
            )}
          </Fragment>
        ))}
      </div>
    </Card>
  </div>
);

export default HeroCard;
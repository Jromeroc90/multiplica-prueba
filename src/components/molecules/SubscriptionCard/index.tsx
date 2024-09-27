import styles from './subscriptionCard.module.scss';
import { Button, Card } from '@/components/atoms';

const SubscriptionCard = () => (
  <div className={styles['subscription-card']}>
    <Card high>
      <div className={styles['subscription-card-content']}>
        <div className={styles['subscription-card-content-text']}>
          <h3>Subscribe now for<br />get special features!</h3>
          <p>Lorem ipsum dolor sit amet </p>
        </div>

        <Button size='lg'>
          Subscribe now
        </Button>
      </div>
    </Card>
  </div>
);

export default SubscriptionCard;
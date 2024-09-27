import { Container } from '@/components/atoms';
import { PlanCard, PlanCarousel } from '@/components/molecules';
import { plans } from '@/util/constants';
import styles from './plans.module.scss';

const Plans = () => (
  <section id='pricing'>
    <Container>
      <div className={styles['plans-head']}>
        <h2>Choose your plan</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat
          semper augue.
        </p>
      </div>
    </Container>

    <div className={styles['plans-carousel-container']}>
      <PlanCarousel>
        {plans.map(plan => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </PlanCarousel>
    </div>
  </section>
);

export default Plans;
import { Container } from '@/components/atoms';
import { SubscriptionCard, TestimonialCard, TestimonialCarousel } from '@/components/molecules';
import { testimonials } from '@/util/constants';
import styles from './testimonials.module.scss';

const Testimonials = () => (
  <section id='testimonials' className={styles['testimonials']}>
    <Container>
      <div className={styles['testimonials-head']}>
        <h2>Trusted by thousands of<br />happy customer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat
          semper augue.
        </p>
      </div>
    </Container>

    <div className={styles['testimonials-carousel-container']}>
      <TestimonialCarousel>
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </TestimonialCarousel>
    </div>

    <Container>
      <SubscriptionCard />
    </Container>
  </section>
);

export default Testimonials;
import { FC } from 'react';
import { Container } from '@/components/atoms';
import { CheckList } from '@/components/molecules';
import FeaturesImage from '@/assets/ilu2.svg';
import { featuresList } from '@/util/constants';
import styles from './features.module.scss';

const Features: FC = () => (
  <Container>
    <section id='feature' className={styles['features']}>
      <div className={styles['features-image']}>
        <img src={FeaturesImage} alt='features'/>
      </div>

      <div className={styles['features-text']}>
        <h2>We provide many<br/>features you can use</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat
          semper augue.
        </p>

        <CheckList strong list={featuresList} />
      </div>
    </section>
  </Container>
);

export default Features;
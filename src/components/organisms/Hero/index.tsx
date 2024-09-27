import { FC } from 'react';
import { Button, Container } from '@/components/atoms';
import { HeroCard } from '@/components/molecules';
import HeroImage from '@/assets/ilu1.svg';
import styles from './hero.module.scss';

const Hero: FC = () => (
  <div className={styles['hero-wrapper']}>
    <Container>
      <div className={styles['hero']}>
        <div className={styles['hero-text']}>
          <h1>
            Want anything to be easy with <span>LaslesVPN</span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat
            semper augue.
          </p>

          <Button>
            Get started
          </Button>
        </div>

        <div className={styles['hero-image']}>
          <img src={HeroImage} alt='hero'/>
        </div>
      </div>

      <HeroCard />
    </Container>
  </div>
);

export default Hero;
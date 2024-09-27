import { Children, FC, PropsWithChildren, useState } from 'react';
import clsx from 'clsx';
import ArrowActive from '@/assets/arrow-active.svg';
import ArrowDisabled from '@/assets/arrow-disabled.svg';
import styles from './carousel.module.scss';

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const [index, setIndex] = useState(0);
  const total = Children.count(children);
  const [active, setActive] = useState(0);

  const handleScrollLeft = () => {
    if (active !== 0) {
      setActive(state => state - 1);
      setIndex((active - 1) * -260);
    }
  };

  const handleScrollRight = () => {
    if (active < total - 1) {
      setActive(state => state + 1);
      setIndex((active + 1) * -260);
    }
  };

  return (
    <>
      <div className={styles['carousel']}>
        <div
          className={styles['carousel-aux']}
          style={{
            transform: `translateX(${index}px)`,
          }}
        >
          <div className={styles['carousel-wrapper']}>
            {children}
          </div>
        </div>
      </div>

      <div className={styles['carousel-controls']}>
        <div className={styles['carousel-controls-dots']}>
          {[...Array(total)].map((_item, index) => (
            <div
              key={index}
              className={clsx(
                styles['carousel-controls-dots_dot'],
                {
                  [styles['active']]: active === index,
                }
              )}
              onClick={() => setActive(index)}
            />
          ))}
        </div>

        <div className={styles['carousel-controls-arrows']}>
          <div
            onClick={handleScrollLeft}
            className={styles['carousel-controls-arrows_arrow']}
          >
            <img
              src={active !== 0 ? ArrowActive : ArrowDisabled}
              className={clsx({
                [styles['rotate']]: active !== 0
              })}
              alt='previous'
            />
          </div>

          <div
            onClick={handleScrollRight}
            className={styles['carousel-controls-arrows_arrow']}
          >
            <img
              src={active !== total - 1 ? ArrowActive : ArrowDisabled}
              className={clsx({
                [styles['rotate']]: active === total - 1
              })}
              alt='previous'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel;
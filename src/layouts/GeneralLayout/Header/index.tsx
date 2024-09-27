import { FC } from 'react';
import clsx from 'clsx';
import { Container } from '@/components/atoms';
import Logo from '@/assets/logo.svg';
import Menu from '@/assets/icons/menu.svg';
import styles from './header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles['header-wrapper']}>
      <Container>
        <header
          className={styles['header']}
        >
          <div
            className={clsx(
              styles['header-block'],
              styles['header-block-mobile'],
            )}
          >
            <div className={styles['header-logo']}>
              <img src={Logo} alt='Logo'/>
              <p>Lasles<span>VPN</span></p>
            </div>

            <div
              className={styles['header-menu']}
              onClick={() => {}}
            >
              <img src={Menu} alt='menu' />
            </div>

            <nav className={styles['header-nav']}>
              <ul>
                <li>
                  <a href='#feature'>Features</a>
                </li>
                <li>
                  <a href='#pricing'>Pricing</a>
                </li>
                <li>
                  <a href='#testimonials'>Testimonial</a>
                </li>
                <li>
                  <a href='#help'>Help</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles['header-block']}>
            <div className={styles['header-actions']}>
              <button className={styles['header-actions-button']}>
                Sign in
              </button>

              <button
                className={clsx(
                  styles['header-actions-button'],
                  styles['header-actions-button-border']
                )}
              >
                Sign up
              </button>
            </div>
          </div>
        </header>
      </Container>
    </header>
  );
};
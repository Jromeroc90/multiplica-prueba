import { FC } from 'react';
import { Container } from '@/components/atoms';
import { footerLinks, footerNav } from '@/util/constants';
import Logo from '@/assets/logo.svg';
import { BgIcon } from '@/components/atoms';
import styles from './footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles['footer-container']}>
      <Container>
        <div className={styles['footer']}>
          <div className={styles['footer-block']}>
            <div className={styles['footer-block-logo']}>
              <img src={Logo} alt='Logo'/>
              <p>Lasles<span>VPN</span></p>
            </div>

            <p className={styles['footer-block-description']}>
              Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat
              semper augue.
            </p>

            <div className={styles['footer-block-links']}>
              {footerLinks.map(link => (
                <a key={link.id} target='_blank' href={link.href}>
                  <BgIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles['footer-nav']}>
            {footerNav.map(obj => (
              <div
                key={obj.title}
                className={styles['footer-nav-col']}
              >
                <span>{obj.title}</span>
                <ul key={obj.title}>
                  {obj.children.map(links => (
                    <li key={links.label}>
                      <a href={links.href} rel='noreferrer noopener'>
                        {links.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
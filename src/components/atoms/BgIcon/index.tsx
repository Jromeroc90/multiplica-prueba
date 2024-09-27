import { FC } from 'react';
import styles from './bgIcon.module.scss';

interface BgIconProps {
  icon: string;
}

const BgIcon: FC<BgIconProps> = ({ icon }) => (
  <div className={styles['icon-container']}>
    <img src={icon} alt='icono' />
  </div>
);

export default BgIcon;
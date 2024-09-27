import { FC, PropsWithChildren } from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, size = 'md' }) => (
  <button
    className={clsx(
      styles['button'],
      styles[`button-${size}`]
    )}
  >
    {children}
  </button>
);

export default Button;
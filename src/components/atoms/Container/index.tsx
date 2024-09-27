import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  fluid,
}) => (
  <div
    className={clsx(styles['container'], {
      [styles['container-fluid']]: fluid,
    })}
  >
    {children}
  </div>
);

export default Container;
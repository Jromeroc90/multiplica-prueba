import { FC, HTMLAttributes } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type GeneralLayoutProps = HTMLAttributes<HTMLDivElement>;

export const GeneralLayout: FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
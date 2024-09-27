import { GeneralLayout } from './layouts';
import { Features, Hero, Plans, Testimonials } from '@/components/organisms';
import './styles.scss'

const App = () => {
  return (
    <GeneralLayout>
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
    </GeneralLayout>
  );
};

export default App

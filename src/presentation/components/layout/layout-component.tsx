import { Footer, Header } from '@/presentation/components';
import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComponent = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutComponent;

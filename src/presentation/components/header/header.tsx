'use client';
import { useMediaQuery } from 'react-responsive';
import { Button } from '@/presentation/components';
import './header.css';

const Header = (): JSX.Element => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <header className="header">
      {isTablet ? (
        <img src="/logo.svg" alt="Coopers company logo" />
      ) : (
        <img src="/logo-icon.svg" alt="Coopers company logo" />
      )}
      <Button variant="black" size="small">
        entrar
      </Button>
    </header>
  );
};

export default Header;

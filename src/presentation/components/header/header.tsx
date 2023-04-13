'use client';
import { useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button, InputWithLabel } from '@/presentation/components';
import './header.css';
import AuthModal from '../auth-modal/auth-modal';

const Header = (): JSX.Element => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <header className="header">
      {isTablet ? (
        <img src="/logo.svg" alt="Coopers company logo" />
      ) : (
        <img src="/logo-icon.svg" alt="Coopers company logo" />
      )}
      <Button variant="black" onClick={openModal} size="small">
        sign in
      </Button>
      <AuthModal isOpen={isOpen} closeModal={closeModal} />
    </header>
  );
};

export default Header;

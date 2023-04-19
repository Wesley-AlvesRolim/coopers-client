'use client';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '@/presentation/components';
import './header.css';
import AuthModal from '../auth-modal/auth-modal';
import { useAuth } from '@/presentation/store';

const Header = (): JSX.Element => {
  const { isAuthenticated, logout } = useAuth((state) => state);
  const isTablet = useMediaQuery({ minWidth: 768 });
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="header">
      {isTablet ? (
        <Image
          src="/logo.svg"
          width={217}
          height={50}
          alt="Coopers company logo"
        />
      ) : (
        <Image
          src="/logo-icon.svg"
          width={50}
          height={50}
          alt="Coopers company logo"
        />
      )}
      {isAuthenticated ? (
        <Button variant="black" onClick={logout} size="small">
          sign out
        </Button>
      ) : (
        <Button variant="black" onClick={openModal} size="small">
          sign in
        </Button>
      )}
      <AuthModal isOpen={isOpen} closeModal={closeModal} />
    </header>
  );
};

export default Header;

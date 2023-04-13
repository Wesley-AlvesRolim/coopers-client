import { useCallback, useState } from 'react';
import { Button, InputWithLabel } from '@/presentation/components';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import AuthModalHeader from './auth-modal-header/auth-modal-header';
import './auth-modal.css';

interface AuthModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AuthModal = ({ isOpen, closeModal }: AuthModalProps): JSX.Element => {
  return (
    <div role="dialog" aria-hidden={!isOpen} id="auth-modal">
      <PureModal isOpen={isOpen} onClose={closeModal} closeButton="close">
        <>
          <img
            src="/login-image.svg"
            alt="Woman interacting with floating geometric figures"
          />
          <AuthModalHeader />
          <form>
            <InputWithLabel label="User:" />
            <InputWithLabel label="Password:" type="password" />
            <Button>Sign in</Button>
          </form>
        </>
      </PureModal>
    </div>
  );
};

export default AuthModal;

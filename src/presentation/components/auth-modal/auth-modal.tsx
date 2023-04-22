/* eslint-disable @typescript-eslint/no-misused-promises */
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import './auth-modal.css';
import { type FormLoginData } from '@/presentation/types';
import { useAuth } from '@/presentation/store';
import { AuthModalLogin, AuthModalRegister } from './auth-modal-screens';

interface AuthModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AuthModal = ({ isOpen, closeModal }: AuthModalProps): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const { login, createAccount } = useAuth();
  const [isSignInPage, setIsSignInPage] = useState(true);

  const onSubmit = async (data: FormLoginData) => {
    try {
      if (isSignInPage) {
        await login(data);
        closeModal();
        toast.success('You are logged in!');
      } else {
        await createAccount(data);
        setIsSignInPage(true);
        toast.success('Account created!');
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const changeScreen = () => {
    setIsSignInPage((state) => !state);
  };

  return (
    <div role="dialog" aria-hidden={!isOpen} id="auth-modal">
      <Toaster />
      <PureModal isOpen={isOpen} onClose={closeModal} closeButton="close">
        <>
          <Image
            src="/login-image.svg"
            width={231}
            height={231}
            alt="Woman interacting with floating geometric figures"
          />
          {isSignInPage ? (
            <AuthModalLogin
              changeScreen={changeScreen}
              handleSubmit={handleSubmit(async (data) => {
                await onSubmit(data as FormLoginData);
              })}
              register={register}
            />
          ) : (
            <AuthModalRegister
              changeScreen={changeScreen}
              handleSubmit={handleSubmit(async (data) => {
                await onSubmit(data as FormLoginData);
              })}
              register={register}
            />
          )}
        </>
      </PureModal>
    </div>
  );
};

export default AuthModal;

/* eslint-disable @typescript-eslint/no-misused-promises */
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Button, InputWithLabel } from '@/presentation/components';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import AuthModalHeader from './auth-modal-header/auth-modal-header';
import './auth-modal.css';
import { type FormLoginData } from '@/presentation/types';
import { useAuth } from '@/presentation/store';

interface AuthModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AuthModal = ({ isOpen, closeModal }: AuthModalProps): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = async (data: FormLoginData) => {
    try {
      await login(data);
      closeModal();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
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
          <AuthModalHeader />
          <form
            onSubmit={handleSubmit(async (data) => {
              await onSubmit(data as FormLoginData);
            })}
          >
            <InputWithLabel label="User:" required {...register('username')} />
            <InputWithLabel
              label="Password:"
              type="password"
              required
              {...register('password')}
            />
            <Button>Sign in</Button>
          </form>
        </>
      </PureModal>
    </div>
  );
};

export default AuthModal;

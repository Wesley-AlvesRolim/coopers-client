import { Button, InputWithLabel } from '@/presentation/components';
import AuthModalHeader from '../auth-modal-header/auth-modal-header';

interface AuthModalRegisterProps {
  handleSubmit: () => void;
  register: (fieldName: string) => any;
  changeScreen: () => void;
}

const AuthModalRegister = ({
  handleSubmit,
  register,
  changeScreen,
}: AuthModalRegisterProps): JSX.Element => {
  return (
    <>
      <AuthModalHeader page="Sign up" />
      <form onSubmit={handleSubmit}>
        <InputWithLabel
          label="User:"
          required
          data-testid="username-register-input"
          {...register('username')}
        />
        <InputWithLabel
          label="Password:"
          type="password"
          required
          data-testid="password-register-input"
          {...register('password')}
        />
        <Button data-testid="sign-up-button">Sign up</Button>
        <p>
          Do you have a account?{' '}
          <button type="button" onClick={changeScreen}>
            Sign in
          </button>
        </p>
      </form>
    </>
  );
};

export default AuthModalRegister;

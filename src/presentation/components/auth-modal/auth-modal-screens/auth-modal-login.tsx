import { Button, InputWithLabel } from '@/presentation/components';
import AuthModalHeader from '../auth-modal-header/auth-modal-header';

interface AuthModalLoginProps {
  handleSubmit: () => void;
  register: (fieldName: string) => any;
  changeScreen: () => void;
}

const AuthModalLogin = ({
  handleSubmit,
  register,
  changeScreen,
}: AuthModalLoginProps): JSX.Element => {
  return (
    <>
      <AuthModalHeader page="Sign in" />
      <form onSubmit={handleSubmit}>
        <InputWithLabel label="User:" required {...register('username')} />
        <InputWithLabel
          label="Password:"
          type="password"
          required
          {...register('password')}
        />
        <Button>Sign in</Button>
        <p>
          Don´t have account?{' '}
          <button type="button" onClick={changeScreen}>
            Sign up
          </button>
        </p>
      </form>
    </>
  );
};

export default AuthModalLogin;

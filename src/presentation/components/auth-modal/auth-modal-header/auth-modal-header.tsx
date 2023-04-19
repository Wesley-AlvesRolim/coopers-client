import './auth-modal-header.css';

interface AuthModalHeaderProps {
  page: string;
}

const AuthModalHeader = ({ page }: AuthModalHeaderProps): JSX.Element => {
  return (
    <header id="auth-modal-header">
      <h1>
        {page} <span>to access your list</span>
      </h1>
    </header>
  );
};

export default AuthModalHeader;

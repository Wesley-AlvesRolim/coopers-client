import { InputHTMLAttributes } from 'react';
import './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps): JSX.Element => {
  return <input type="text" className="input-component" {...props} />;
};

export default Input;

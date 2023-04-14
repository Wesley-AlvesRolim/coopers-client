import { type InputHTMLAttributes, useId } from 'react';
import { Input } from '@/presentation/components';
import './input-with-label.css';

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputWithLabel = ({
  label,
  required,
  ...inputProps
}: InputWithLabelProps): JSX.Element => {
  const id = useId();

  return (
    <div className="input-with-label-container">
      <label htmlFor={id}>{required ?? false ? `${label}*` : label}</label>
      <Input id={id} required={required} {...inputProps} />
    </div>
  );
};

export default InputWithLabel;

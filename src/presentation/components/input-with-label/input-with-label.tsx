import { type InputHTMLAttributes, useId, forwardRef, type Ref } from 'react';
import { Input } from '@/presentation/components';
import './input-with-label.css';

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputWithLabel = (
  { label, required, ...inputProps }: InputWithLabelProps,
  ref: Ref<HTMLInputElement>
): JSX.Element => {
  const id = useId();

  return (
    <div className="input-with-label-container">
      <label htmlFor={id}>{required ?? false ? `${label}*` : label}</label>
      <Input id={id} required={required} {...inputProps} ref={ref} />
    </div>
  );
};

export default forwardRef(InputWithLabel);

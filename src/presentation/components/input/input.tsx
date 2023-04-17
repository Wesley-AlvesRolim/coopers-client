import { type LegacyRef, forwardRef } from 'react';
import './input.css';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = (
  props: InputProps,
  ref: LegacyRef<HTMLInputElement>
): JSX.Element => {
  return <input ref={ref} type="text" className="input-component" {...props} />;
};

export default forwardRef(Input);

import { useId } from 'react';
import './checkbox.css';

interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const id = useId();

  return (
    <div className="checkbox-wrapper">
      <div className="round">
        <input type="checkbox" id={`checkbox-${id}`} {...props} />
        <label htmlFor={`checkbox-${id}`}></label>
      </div>
    </div>
  );
};

export default Checkbox;

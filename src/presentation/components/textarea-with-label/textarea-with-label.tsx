import { type TextareaHTMLAttributes, useId } from 'react';
import { Textarea } from '@/presentation/components';

interface TextareaWithLabelProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextareaWithLabel = ({
  label,
  required,
  ...textareaProps
}: TextareaWithLabelProps): JSX.Element => {
  const id = useId();

  return (
    <div className="input-with-label-container">
      <label htmlFor={id}>{required ?? false ? `${label}*` : label}</label>
      <Textarea id={id} required={required} {...textareaProps} />
    </div>
  );
};

export default TextareaWithLabel;

import { type TextareaHTMLAttributes } from 'react';
import './textarea.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = (props: TextareaProps): JSX.Element => {
  return <textarea className="input-component textarea-component" {...props} />;
};

export default Textarea;

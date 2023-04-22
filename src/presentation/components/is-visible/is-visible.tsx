import { type ReactElement } from 'react';

interface IsVisibleProps {
  condition: boolean;
  children: ReactElement;
}

const IsVisible = ({ condition, children }: IsVisibleProps) => {
  return condition ? children : null;
};

export default IsVisible;

'use client';

import { type ReactElement } from 'react';
import {
  Droppable as DroppableLib,
  type DroppableProps as DroppablePropsLib,
} from 'react-beautiful-dnd';

interface DroppableProps extends Omit<DroppablePropsLib, 'children'> {
  children: ReactElement;
}

const Droppable = ({ children, ...rest }: DroppableProps) => {
  return (
    <DroppableLib {...rest}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </DroppableLib>
  );
};

export default Droppable;

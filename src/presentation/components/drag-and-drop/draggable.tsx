'use client';
import { type ReactElement } from 'react';
import {
  Draggable as DraggableLib,
  type DraggableProps as DraggablePropsLib,
} from 'react-beautiful-dnd';

interface DraggableProps extends Omit<DraggablePropsLib, 'children'> {
  children: ReactElement;
}

const Draggable = ({ children, ...rest }: DraggableProps) => {
  return (
    <DraggableLib {...rest}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </DraggableLib>
  );
};

export default Draggable;

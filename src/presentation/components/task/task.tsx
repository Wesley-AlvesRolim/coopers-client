import { Checkbox } from '@/presentation/components';
import './task.css';

interface TaskProps {
  title: string;
  listState: string;
}

const Task = ({ title, listState }: TaskProps): JSX.Element => {
  return (
    <li className="task">
      <Checkbox className={`${listState}`} />
      <input
        className="task-description"
        type="text"
        value={title}
        onChange={console.log}
      />
      <button>delete</button>
    </li>
  );
};

export default Task;

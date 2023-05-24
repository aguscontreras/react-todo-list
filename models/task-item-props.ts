import { Task } from './task';

export interface TaskItemProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (task: Task) => void;
}

import * as React from 'react';
import { Fragment } from 'react';
import { TaskItemProps } from '../../models/task-item-props';

export function TaskItem({ task, onUpdate, onDelete }: TaskItemProps) {
  const [value, setValue] = React.useState(task.task);
  const [updating, setUpdating] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    const updatedTask = { ...task, task: value };
    setUpdating(false);
    onUpdate(updatedTask);
  };

  const taskView = (
    <Fragment>
      <span>{task.task}</span>
      <span>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => setUpdating(true)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(task)}
        >
          Delete
        </button>
      </span>
    </Fragment>
  );

  const taskEdit = (
    <Fragment>
      <input type="text" value={value} onChange={handleChange}></input>
      <span>
        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSave}>
          Cancel
        </button>
      </span>
    </Fragment>
  );

  return <Fragment>{updating ? taskEdit : taskView}</Fragment>;
}

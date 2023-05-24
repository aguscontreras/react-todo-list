import * as React from 'react';

export function TaskCreator({ onAddTask }) {
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onAddTask(value);
    setValue('');
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="add-new-form">
        <input
          type="text"
          id="task"
          placeholder="New task..."
          onChange={handleChange}
          value={value}
        ></input>
        <button type="submit" className="btn btn-primary" disabled={!value}>
          Add new
        </button>
      </form>
    </React.Fragment>
  );
}

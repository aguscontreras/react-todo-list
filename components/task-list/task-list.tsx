import * as React from 'react';
import { Task } from '../../models/task';
import { Message } from '../message/message';
import { TaskCreator } from '../task-creator/task-creator';
import { TaskItem } from '../task-item/task-item';

export function TaskList() {
  const [myTasks, setMyTasks] = React.useState([]);

  const handleAddTask = (task: string) => {
    const id = new Date().getTime();
    const newTask = { id, task };
    const allTasks = [...myTasks, newTask];
    console.log('[Add task] New task', newTask);
    console.log('[Add task] All tasks', allTasks);
    setMyTasks(allTasks);
  };

  const handleDeleteTask = (task: Task) => {
    const afterDeleteTasks = myTasks.filter(({ id }) => id !== task.id);
    console.log('[Delete task] Task to delete', task);
    console.log('[Delete task] All tasks', afterDeleteTasks);
    setMyTasks(afterDeleteTasks);
  };

  const handleUpdateTask = (task: Task) => {
    const index = myTasks.findIndex(({ id }) => id === task.id);
    const updatedTasks = [...myTasks];
    updatedTasks[index] = task;
    console.log('[Update task] Updated task', task);
    console.log('[Update task] All tasks', updatedTasks);
    setMyTasks(updatedTasks);
  };

  const taskList = myTasks.map((task) => {
    return (
      <li key={task.id}>
        <TaskItem
          task={task}
          onDelete={handleDeleteTask}
          onUpdate={handleUpdateTask}
        ></TaskItem>
      </li>
    );
  });

  return (
    <React.Fragment>
      <TaskCreator onAddTask={handleAddTask}></TaskCreator>
      {myTasks.length ? (
        <ul>{taskList}</ul>
      ) : (
        <Message message="No hay tareas"></Message>
      )}
    </React.Fragment>
  );
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [];

function addTask(title: string): Task {
  const newTask = {
    id: tasks.length + 1,
    title: title,
    completed: false,
  };
  tasks.push(newTask);
  return newTask;
}

function removeTask(id: number) {
  const index = tasks.findIndex((task) => task.id === id);
  const removedTask = tasks.splice(index, 1);
  return removedTask;
}

function toggleTaskCompletion(id: number): boolean {
  const index = tasks.findIndex((task) => task.id === id);
  if (index >= 0) {
    tasks[index].completed = !tasks[index].completed;
    return true;
  }
  return false;
}

function getTasks(): Task[] {
  return [...tasks];
}

export { Task, addTask, removeTask, toggleTaskCompletion, getTasks };

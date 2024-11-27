import {
  Task,
  addTask,
  removeTask,
  toggleTaskCompletion,
  getTasks,
} from "./components/task";

const form = document.getElementById("task-form") as HTMLFormElement;
const input = document.getElementById("task-input") as HTMLInputElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;

function renderTasks(): void {
  taskList.innerHTML = "";
  const tasks = getTasks();

  tasks.forEach((task) => {
    const li = createTaskListElement(task);
    const button = createTaskDeleteButton(task.id);
    li.appendChild(button);
    taskList.appendChild(li);
  });
}

function createTaskListElement(task: Task): HTMLLIElement {
  const li = document.createElement("li");
  li.textContent = `${task.title} : ${
    task.completed ? "complétée" : "à compléter"
  }`;

  li.addEventListener("click", () => {
    toggleTaskCompletion(task.id);
    renderTasks();
  });
  return li;
}

function createTaskDeleteButton(taskId: number): HTMLButtonElement {
  const button = document.createElement("button");
  button.textContent = "Supprimer";
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    removeTask(taskId);
    renderTasks();
  });
  return button;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (task) {
    addTask(task);
    renderTasks();
    input.value = "";
  }
});

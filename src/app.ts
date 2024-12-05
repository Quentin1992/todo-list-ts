import {
  Task,
  addTask,
  removeTask,
  toggleTaskCompletion,
  getTasks,
} from "./components/task";

import binIcon from "./assets/bin.png";

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
  const inputLabel = document.createElement("label");
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.checked = task.completed;
  checkboxInput.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleTaskCompletion(task.id);
    renderTasks();
  });
  inputLabel.appendChild(checkboxInput);
  const inputLabelText = document.createTextNode(task.title);
  inputLabel.appendChild(inputLabelText);
  li.appendChild(inputLabel);
  return li;
}

function createTaskDeleteButton(taskId: number): HTMLButtonElement {
  const button = document.createElement("button");
  const icon = document.createElement("img");
  icon.src = binIcon;
  button.appendChild(icon);
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

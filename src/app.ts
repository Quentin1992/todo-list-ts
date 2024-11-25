import {
  Task,
  addTask,
  removeTask,
  displayTasks,
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
    const li = document.createElement("li");
    li.textContent = `${task.title} : ${
      task.completed ? "complétée" : "à compléter"
    }`;
    li.addEventListener("click", () => {
      toggleTaskCompletion(task.id);
      renderTasks();
    });
    taskList.appendChild(li);
  });
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

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
        completed: false
    };
    tasks.push(newTask);
    return newTask;
}

function removeTask(id: number) {
    const index = tasks.findIndex(task => task.id === id);
    const removedTask = tasks.splice(index, 1);
    return removedTask;
};

function displayTasks(): void {
    console.log("Voici les tâches :");
    tasks.forEach(task => console.log(`${task.id} : ${task.title} [${task.completed ? "Complétée" : "Pas complétée"}]`));
}

function toggleTaskCompletion(id: number): boolean {
    const index = tasks.findIndex(task => task.id === id);
    if(index >= 0) {
        tasks[index].completed = !tasks[index].completed;
        return true;
    }
    return false;
}

addTask("Terminer la todo");
addTask("Prendre le train");
removeTask(1);
toggleTaskCompletion(2);
displayTasks();
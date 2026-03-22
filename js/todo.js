let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const box = document.getElementById("taskInput");
    if (!box.value.trim()) return;

    tasks.push({ text: box.value.trim(), done: false });
    box.value = "";

    saveTasks();
}

function toggleTask(i) {
    tasks[i].done = !tasks[i].done;
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    const doneList = document.getElementById("completedList");

    list.innerHTML = "";
    doneList.innerHTML = "";

    tasks.forEach((t,i) => {
        let row = `
        <div class="task-row ${t.done ? "done" : ""}">
           <span>${t.text}</span>
           <button onclick="toggleTask(${i})">${t.done ? "Undo" : "Done"}</button>
        </div>`;

        if (t.done) doneList.innerHTML += row;
        else list.innerHTML += row;
    });
}

renderTasks();
// Load today's date by default
const datePicker = document.getElementById("datePicker");
datePicker.valueAsDate = new Date();

let data = JSON.parse(localStorage.getItem("diaryData")) || {};

function getCurrentDate() {
    return datePicker.value;
}

// --- Load everything when switching date ---
datePicker.addEventListener("change", loadDayData);

function loadDayData() {
    let d = getCurrentDate();
    if (!data[d]) data[d] = { tasks: [], logs: [], mood: "-", diary: "" };

    document.getElementById("diaryText").value = data[d].diary;
    document.getElementById("currentMood").innerText = "Mood: " + data[d].mood;

    renderTasks();
    renderLogs();
}

// --- Mood ---
function setMood(m) {
    let d = getCurrentDate();
    data[d].mood = m;
    save();
    document.getElementById("currentMood").innerText = "Mood: " + m;
}

// --- Diary ---
function saveDiary() {
    let d = getCurrentDate();
    data[d].diary = document.getElementById("diaryText").value;
    save();
}

// --- Tasks ---
function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;

    let d = getCurrentDate();
    data[d].tasks.push(input.value);
    input.value = "";
    save();
    renderTasks();
}

function renderTasks() {
    let d = getCurrentDate();
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    data[d].tasks.forEach((t, i) => {
        list.innerHTML += `
        <li>
            ${t}
            <span class="done-btn" onclick="markDone(${i})">Done</span>
        </li>`;
    });
}

function markDone(i) {
    let d = getCurrentDate();
    let completed = data[d].tasks[i] + " ✔ (" + new Date().toLocaleString() + ")";
    data[d].logs.push(completed);
    data[d].tasks.splice(i, 1);
    save();
    loadDayData();
}

// --- Logs ---
function renderLogs() {
    let d = getCurrentDate();
    let logDiv = document.getElementById("taskLog");

    logDiv.innerHTML = "";
    data[d].logs.forEach(l => {
        logDiv.innerHTML += `<div class="log-item">${l}</div>`;
    });
}

// --- Save everything ---
function save() {
    localStorage.setItem("diaryData", JSON.stringify(data));
}

// Initialize
loadDayData();
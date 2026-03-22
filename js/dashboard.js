/* ---------- LOAD DATA ---------- */
function loadDashboard() {

    /* Mood Heatmap */
    let moods = JSON.parse(localStorage.getItem("moods")) || [];
    const days = ["S","M","T","W","T","F","S"];
    const colors = ["#ffe3ee","#ffc2da","#ff9fc5","#ff7ab1","#ff589d"];

    let heatmap = document.getElementById("heatmap");
    heatmap.innerHTML = "";

    for (let i = 0; i < 7; i++) {
        let m = moods.filter(x => x.day === i).pop();
        let box = document.createElement("div");
        box.classList.add("day-box");

        box.style.background = m ? colors[m.mood-1] : "#ffe3ee";
        box.innerText = days[i];

        heatmap.appendChild(box);
    }

    /* Latest Journal */
    let entries = JSON.parse(localStorage.getItem("journal")) || [];
    document.getElementById("latestJournal").innerText =
        entries.length ? entries[entries.length - 1].text : "No entries yet.";

    /* Tasks */
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let done = tasks.filter(t => t.done).length;

    document.getElementById("todayTasks").innerText =
        done + " / " + tasks.length + " completed";
}

loadDashboard();
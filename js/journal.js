let journal = JSON.parse(localStorage.getItem("journal")) || [];

function saveJournal() {
    const text = document.getElementById("journalText").value.trim();
    if (!text) return;

    journal.push({
        text,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("journal", JSON.stringify(journal));

    document.getElementById("journalText").value = "";
    renderJournal();
}

function renderJournal() {
    let box = document.getElementById("journalEntries");
    box.innerHTML = "";

    journal.forEach(e => {
        box.innerHTML += `
            <div class="journal-entry">
                <b>${e.date}</b><br><br>
                ${e.text}
            </div>`;
    });
}

renderJournal();
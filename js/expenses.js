let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    let name = document.getElementById("expName").value.trim();
    let amt = document.getElementById("expAmt").value.trim();

    if (!name || !amt) return;

    expenses.push({ name, amt });
    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("expName").value = "";
    document.getElementById("expAmt").value = "";

    renderExpenses();
}

function renderExpenses() {
    let box = document.getElementById("expenseList");
    box.innerHTML = "";

    expenses.forEach(e => {
        box.innerHTML += `
        <div class="task-row">
            <span>${e.name}</span>
            <b>₹${e.amt}</b>
        </div>`;
    });
}

renderExpenses();
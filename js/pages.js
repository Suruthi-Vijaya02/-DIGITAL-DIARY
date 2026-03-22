function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("show"));
    document.getElementById(id).classList.add("show");
}
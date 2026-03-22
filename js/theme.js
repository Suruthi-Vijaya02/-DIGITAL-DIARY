function setTheme(t) {
    document.body.className = t;
    localStorage.setItem("theme", t);
}

document.body.className = localStorage.getItem("theme") || "";
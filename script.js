.card {
    backdrop-filter: var(--blur);
    border: 1px solid var(--card-border);
    background: var(--card);
    box-shadow: var(--shadow);
    border-radius: 20px;
    padding: 25px;
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-4px);
}

.sidebar {
    backdrop-filter: var(--blur);
    border-right: 2px solid var(--side-border);
    background: var(--side);
}

.sidebar button {
    transition: 0.2s;
    box-shadow: var(--shadow);
}

.sidebar button:hover {
    transform: scale(1.03);
}

textarea, input {
    background: rgba(255,255,255,0.45);
    backdrop-filter: blur(8px);
    border-radius: 12px;
    padding: 12px;
    border: 1px solid var(--side-border);
}
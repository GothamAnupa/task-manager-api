const API_URL = "http://127.0.0.1:8000";

// Fetch all tasks and render
async function fetchTasks() {
  const res = await fetch(`${API_URL}/tasks/`);
  const tasks = await res.json();
  const container = document.getElementById("task-list");
  container.innerHTML = "";

  tasks.forEach(task => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p><strong>Status:</strong> ${task.completed ? "✅ Done" : "🕒 Pending"}</p>
    `;
    container.appendChild(card);
  });
}

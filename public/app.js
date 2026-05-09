
    Fconst API = 'http://localhost:3000/todos';
let currentFilter = 'all';
let allTodos = [];

async function loadTodos() {
  allTodos = await fetch(API).then(r => r.json());
  renderTodos();
  updateStats();
}

function renderTodos() {
  let filtered = allTodos;

  if (currentFilter === 'pending') {
    filtered = allTodos.filter(t => !t.done);
  } else if (currentFilter === 'completed') {
    filtered = allTodos.filter(t => t.done);
  }

  document.getElementById('list').innerHTML = filtered.map(t => `
    <li>
      <input type="checkbox" ${t.done ? 'checked' : ''}
        onchange="toggleTodo(${t.id}, this.checked)">
      <span class="${t.done ? 'done-text' : ''}">${t.text}</span>
      <button onclick="deleteTodo(${t.id})">🗑️</button>
    </li>
  `).join('');
}

function updateStats() {
  const total = allTodos.length;
  const completed = allTodos.filter(t => t.done).length;
  const pending = total - completed;

  document.getElementById('total').textContent = total;
  document.getElementById('pending').textContent = pending;
  document.getElementById('completed').textContent = completed;
}

function filterTodos(type) {
  currentFilter = type;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  renderTodos();
}

async function addTodo() {
  const input = document.getElementById('input');
  if (!input.value.trim()) return;
  await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: input.value })
  });
  input.value = '';
  loadTodos();
}

async function toggleTodo(id, done) {
  await fetch(`${API}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ done: done ? 1 : 0 })
  });
  loadTodos();
}

async function deleteTodo(id) {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
  loadTodos();
}

loadTodos();
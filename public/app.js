const API = 'http://localhost:3000/todos';

async function loadTodos() {
  const todos = await fetch(API).then(r => r.json());
  document.getElementById('list').innerHTML = todos.map(t => `
    <li>
      <input type="checkbox" ${t.done ? 'checked' : ''}
        onchange="toggleTodo(${t.id}, this.checked)">
      <span style="${t.done ? 'text-decoration:line-through' : ''}">${t.text}</span>
      <button onclick="deleteTodo(${t.id})">✕</button>
    </li>
  `).join('');
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
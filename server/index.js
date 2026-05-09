const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/todos', (req, res) => {
  res.json(db.prepare('SELECT * FROM todos ORDER BY created_at DESC').all());
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
  const result = db.prepare('INSERT INTO todos (text) VALUES (?)').run(text);
  res.json({ id: result.lastInsertRowid, text, done: 0 });
});

app.patch('/todos/:id', (req, res) => {
  const { done } = req.body;
  db.prepare('UPDATE todos SET done = ? WHERE id = ?').run(done, req.params.id);
  res.json({ success: true });
});

app.delete('/todos/:id', (req, res) => {
  db.prepare('DELETE FROM todos WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
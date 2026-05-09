const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/todos', (req, res) => {
  db.all('SELECT * FROM todos ORDER BY created_at DESC', (err, rows) => {
    res.json(rows || []);
  });
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
  db.run('INSERT INTO todos (text) VALUES (?)', [text], function(err) {
    res.json({ id: this.lastID, text, done: 0 });
  });
});

app.patch('/todos/:id', (req, res) => {
  const { done } = req.body;
  db.run('UPDATE todos SET done = ? WHERE id = ?', [done, req.params.id], () => {
    res.json({ success: true });
  });
});

app.delete('/todos/:id', (req, res) => {
  db.run('DELETE FROM todos WHERE id = ?', [req.params.id], () => {
    res.json({ success: true });
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port ' + (process.env.PORT || 3000));
});
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/todos', (req, res) => {
  res.json(db.getAll());
});

app.post('/todos', (req, res) => {
  const todo = db.add(req.body.text);
  res.json(todo);
});

app.patch('/todos/:id', (req, res) => {
  db.toggle(req.params.id, req.body.done);
  res.json({ success: true });
});

app.delete('/todos/:id', (req, res) => {
  db.delete(req.params.id);
  res.json({ success: true });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port ' + (process.env.PORT || 3000));
});
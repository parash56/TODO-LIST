const todos = [];
let nextId = 1;

const db = {
  getAll: () => todos.slice().reverse(),
  add: (text) => {
    const todo = { id: nextId++, text, done: 0 };
    todos.push(todo);
    return todo;
  },
  toggle: (id, done) => {
    const todo = todos.find(t => t.id == id);
    if (todo) todo.done = done;
  },
  delete: (id) => {
    const index = todos.findIndex(t => t.id == id);
    if (index !== -1) todos.splice(index, 1);
  }
};

module.exports = db;
# 📝 Todo App

A simple full-stack Todo application built with Node.js, Express, and SQLite. This was my first ever full-stack project!

## 🚀 Features

- Add new todos
- Mark todos as done / undone
- Delete todos
- Data is saved permanently in a real database

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Backend | Node.js + Express |
| Database | SQLite (better-sqlite3) |

## 📁 Project Structure

```
todo-app/
├── server/
│   ├── index.js       # Express server & API routes
│   └── db.js          # SQLite database setup
├── public/
│   ├── index.html     # Main HTML page
│   ├── app.js         # Frontend JavaScript
│   └── style.css      # Styling
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/parash56/TODO-LIST.git
   cd TODO-LIST
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node server/index.js
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🔌 API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/todos` | Get all todos |
| POST | `/todos` | Create a new todo |
| PATCH | `/todos/:id` | Toggle todo done/undone |
| DELETE | `/todos/:id` | Delete a todo |

## 📖 What I Learned

- Setting up a Node.js backend from scratch
- Building a REST API with Express
- Working with a real SQL database
- Connecting a frontend to a backend using fetch
- Using Git and GitHub for version control

## 👤 Author

**parash56**  
GitHub: [@parash56](https://github.com/parash56)

---

⭐ If you found this helpful, feel free to star the repo!
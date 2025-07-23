###README.md

# Permalist Project

A full-stack **To-Do List Web Application** built with **Node.js**, **Express.js**, and **PostgreSQL**.  
Supports CRUD operations with persistent storage and dynamic rendering via EJS.

---

## Features

- Add, edit, and delete tasks
- PostgreSQL-powered persistence
- EJS-based dynamic frontend rendering
- Clean UI with editable task titles
- Modular Express.js routes and controllers
- Secure credential management via `.env`

---

## Tech Stack

- **Frontend:** EJS (Embedded JavaScript Templates)
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Middleware:** body-parser, dotenv
- **Package Manager:** npm

---

## Setup Instructions

# 1. Clone the Repository

```bash
git clone https://github.com/your-username/perm-list.git
cd perm-list
```
#2. Install Dependencies
```bash
npm install
```
#3. Configure Environment
Create a .env file in the root directory:

env
```bash
PG_USER=your_postgres_user
PG_HOST=localhost
PG_DATABASE=To_Do
PG_PASSWORD=your_password
PG_PORT=5432
```
#4. Initialize Database
Ensure your PostgreSQL server is running with a database named To_Do Then run:

sql
```
CREATE TABLE IF NOT EXISTS list (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL
);
```
#5. Run the Server
```bash

node index.js
Server runs at: http://localhost:3000
```

Directory Structure
pgsql
```
Permalist-Project/
│
├── public/               # Static assets (CSS, icons, etc.)
├── views/                # EJS templates
│   ├── index.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── .env                  # Environment variables (excluded from Git)
├── .gitignore
├── package.json
└── index.js              # Main application file
```

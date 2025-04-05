const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, "todos.json");

app.use(express.json());
app.use(cors());

async function readTodos() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeTodos(todos) {
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2), "utf8");
}

app.get("/todos", async (req, res) => {
  const todos = await readTodos();
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const todos  = req.body;
  if (!todos) return res.status(400).json({ message: "Item is required" });
  await writeTodos(todos);
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

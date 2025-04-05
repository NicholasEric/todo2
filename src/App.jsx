import './App.css';
import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const API_URL = "http://localhost:5000/todos";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const saveList = async () => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todos)
    });
  }

  const addItem = item => {
    const id = Date.now();
    setTodos([...todos, {
      id,
      item,
      completed: false
    }]);
  }

  const editItem = (todoId, item) => {
    setTodos(todos.map(todo => (todo.id === todoId) ? {...todo, item} : todo));
  }

  const toggleItem = todoId => {
    setTodos(todos.map(todo => (todo.id === todoId) ? {...todo, completed: !todo.completed} : todo));
  }

  const deleteItem = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  return (
    <div>
      <TodoForm addItem={addItem}/>
      <TodoList todos={todos} saveList={saveList} editItem={editItem} toggleItem={toggleItem} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;

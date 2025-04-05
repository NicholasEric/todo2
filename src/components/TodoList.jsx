import TodoItem from './TodoItem';

const TodoList = ({todos, saveList, editItem, toggleItem, deleteItem}) => {

  const handleSaveList = e => {
    e.preventDefault();
    saveList();
  }

  return (
    <div>
      <ul className="list-group">
        {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} editItem={editItem} toggleItem={toggleItem} deleteItem={deleteItem} />
      ))}
      </ul>
      <form onSubmit={handleSaveList}>
        <button type="submit" className="btn btn-warning float-end">Save</button>
      </form>
    </div>
    );

}

export default TodoList;
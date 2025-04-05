import { useState } from "react";

const TodoItem = ({todo, editItem, toggleItem, deleteItem}) => {
    const [edit, setEdit] = useState(false);
    const [item, setItem] = useState(todo.item);

    const handleToggleItem = () => {
        toggleItem(todo.id);
    }

    const handleDeleteItem = () => {
        deleteItem(todo.id);
    }

    const handleEditChange = e => {
        setItem(e.target.value);
    }

    const handleEditItem = () => {
        if (edit) editItem(todo.id, item); 
        setEdit(!edit);
    }

    return (<li className="list-group-item" style={{backgroundColor:'burlywood'}}>
        <input className={todo.completed? "text-decoration-line-through text-muted" : ""} value={item} readOnly={!edit} type="text"
onChange={handleEditChange}/>
        <span>
            <button onClick={handleEditItem} className={`btn btn-${edit ? 'success': 'info'}`}>{edit ? 'done' : 'edit'}</button>
            <button onClick={handleToggleItem} className="btn btn-primary">check</button>
            <button onClick={handleDeleteItem} className="btn btn-danger">delete</button>
        </span>
    </li>);
}

export default TodoItem;
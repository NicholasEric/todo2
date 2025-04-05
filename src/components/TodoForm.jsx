import { useState } from "react";

const TodoForm = ({addItem}) => {
    const [item, setItem] = useState("");
    
    const handleInputChange = e => {
        setItem(e.target.value);
    }

    const handleAddItem = e => {
        e.preventDefault();
        if (item) addItem(item);
        setItem("");
    }

    return (
        <form onSubmit={handleAddItem} className="mb-3">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={item}
                    onChange={handleInputChange}
                    placeholder="Enter a task"
                />
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>  
    );
}

export default TodoForm;
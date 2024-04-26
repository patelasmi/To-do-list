import React, {useState} from "react"

export default function EdittodoForm ({addTodo, editTodo, task}) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);
        setValue("");
    }

    return (
        <form className="Todo-form" onSubmit={handleSubmit}>
            <input type="text" value={value} className="todo-input" placeholder="Update task" onChange={ (e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Update Task </button>
        </form>
    )
};

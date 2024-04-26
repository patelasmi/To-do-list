import React, {useState} from "react"

export default function TodoForm ({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value)
        setValue("");
    }

    return (
        <form className="Todo-form" onSubmit={handleSubmit}>
            <input type="text" value={value} className="todo-input" placeholder="What is the task today" onChange={ (e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Add Task </button>
        </form>
    )
};

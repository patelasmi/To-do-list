import React, { useState } from "react"
import TodoForm from './TodoForm';
import Todo  from "./Todo";
import EdittodoForm from "./Edittodoform";
import { v4 as uuidv4} from 'uuid';

uuidv4();

export default function TodoWrapper () {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id:uuidv4(), task: todo, completed: false, isEditing: false}]);
        console.log(todos)
    }

    const toggleComplete = id => {
        console.log(id)
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTask = (task, id) => {
        setTodos(todos.map( todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing } : todo))
    }
    
    return (
        <div className="TodoWrapper">
            <h1>Get Things Done</h1>
            <TodoForm addTodo={addTodo} />
            { 
                todos.map((todo, index) =>
                    todo.isEditing ? <EdittodoForm editTodo={editTask} task={todo}></EdittodoForm> : (
                        <Todo key={index} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    )
                 
                )
            }
        </div>
    )
};

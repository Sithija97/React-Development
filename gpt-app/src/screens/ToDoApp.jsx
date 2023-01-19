import React, { useState } from 'react';
import TodoCard from '../components/TodoCard';
import './TodoApp.css';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, { title: inputTitle, description: inputDescription }]);
        setInputTitle('');
        setInputDescription('');
    }

    function handleDelete(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input
                    value={inputTitle}
                    onChange={e => setInputTitle(e.target.value)}
                    placeholder="Add a title"
                />
                <textarea
                    value={inputDescription}
                    onChange={e => setInputDescription(e.target.value)}
                    placeholder="Add a description"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    //   <li key={index}>
                    //     <h3>{todo.title}</h3>
                    //     <p>{todo.description}</p>
                    //     <button onClick={() => handleDelete(index)}>Delete</button>
                    //   </li>
                    <TodoCard
                        key={index}
                        title={todo.title}
                        description={todo.description}
                        handleDelete={handleDelete}
                        index={index}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;

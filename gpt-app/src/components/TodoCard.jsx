import React from 'react';
import './TodoCard.css';

const TodoCard = ({ title, description, handleDelete, index }) => {
  return (
    <div className="todo-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
};

export default TodoCard;

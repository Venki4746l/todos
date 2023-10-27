import React, { useState } from "react";

function TodoItem({ todo, onEdit, onDelete, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.text);

  //chnage the text with new updated value and display it
  const handleSave = () => {
    onEdit(todo, editedTodo);
    setIsEditing(false);
  };
  //cancle the edit and assign the previous value
  const cancleEdit = () => {
    setIsEditing(false);
    setEditedTodo(todo.text);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            className="form-control"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button className="btn btn-success m-2" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-dark m-2" onClick={cancleEdit}>
            cancle
          </button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo)}
          />
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            className="todotext"
          >
            {todo.text}
          </span>
          <button
            className="btn btn-info m-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button className="btn btn-danger " onClick={() => onDelete(todo)}>
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;

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
    <li className="listItem">
      {isEditing ? (
        <div className="todoEditingContainer">
          <input
            type="text"
            className="form-control"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <div className="editButtonsGruop">
            <button className="btn btn-success " onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-dark " onClick={cancleEdit}>
              cancle
            </button>
          </div>
        </div>
      ) : (
        <div className="tododisplay">
          <div className="checkboxtext">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(todo)}
              className="form-check-input"
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              
            >
              {todo.text}
            </span>
          </div>
          <div>
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
        </div>
      )}
    </li>
  );
}

export default TodoItem;

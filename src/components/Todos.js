import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "./Todos.css";

const Todos = () => {
  //initialize the todos list data
  const [todos, setTodos] = useState([]);

  //add the new todo
  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  //deleted todo
  const deletedtodo = (todo) => {
    setTodos(todos.filter((each) => todo !== each));
  };

  //Edit the Todo
  const editTodo = (todo, newValue) => {
    setTodos(
      todos.map((each) => (each === todo ? { ...each, text: newValue } : each))
    );
  };

  //toggle complete
  const toggleComplete = (todo) => {
    setTodos(
      todos.map((each) =>
        each === todo ? { ...each, completed: !each.completed } : each
      )
    );
  };

  return (
    <div className="todos-container">
      <h1>Todos List</h1>
      <TodoInput onAddTodo={addTodo} />
      {todos.length === 0 ? (
        <p>No todos</p>
      ) : (
        <ul className="todoslist">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onEdit={editTodo}
              onDelete={deletedtodo}
              onToggleComplete={toggleComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default Todos;

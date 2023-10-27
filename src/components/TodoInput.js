import React,{useState} from "react";

const TodoInput = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  //add the todo 
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };
  return (
    <div>
     
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary m-2" onClick={handleAddTodo}>Add</button>
     
    </div>
  );
};

export default TodoInput;

import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [text, setText] = useState("I am Parent data");
  const updateParentData = (value) => {
    setText(value);
  };
  return (
    <div>
      <Child updateText={updateParentData}/>
      <h1>Parent</h1>
      <h1>{text}</h1>
    </div>
  );
};

export default Parent;

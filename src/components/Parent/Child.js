import React, { useState } from "react";

const Child = (props) => {
  const [text, setText] = useState("");
  const onUpdatetextHandler = (e) => {
    setText(e.target.value);
  };
  const onCLickHandler = () => {
    props.updateText(text);
    setText("")
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter Text"
        onChange={onUpdatetextHandler}
      />
      <button className="btn btn-info" onClick={onCLickHandler}>
        pass data
      </button>
    </div>
  );
};

export default Child;

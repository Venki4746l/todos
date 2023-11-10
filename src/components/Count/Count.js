import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../Redux/Actions/CounterActions";
import InputNumber from "./InputNumber";

const Count = () => {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onIncrementHandler = () => {
    dispatch(increment(value));
    setValue("");
  };
  const onDecrementHandler = () => {
    dispatch(decrement(value));
    setValue("");
  };
  return (
    <div>
      <h1>Count</h1>
      <InputNumber value={value} setValue={setValue} />
      <div>
        <button className="btn btn-danger" onClick={onDecrementHandler}>
          decrement
        </button>
        <p>{count}</p>
        <button className="btn btn-primary" onClick={onIncrementHandler}>
          increment
        </button>
      </div>
    </div>
  );
};

export default Count;

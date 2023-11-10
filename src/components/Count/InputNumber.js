import React from "react";

const InputNumber = ({ value, setValue }) => {
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  );
};

export default InputNumber;

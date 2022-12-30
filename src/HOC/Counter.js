import React, { useState } from "react";
const Counter = () => {
  const [value, setValue] = useState(0);
  function increment() {
    setValue(value + 1);
  }
  return (
    <div>
      <p>{value}</p>
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default Counter;

import React from "react";

const RedCounter = (props) => {
  return (
    <div>
      <div
        style={{
          background: "red",
          height: "120px",
          width: "120px",
          textAlign: "center",
        }}
      >
        {props.com}
      </div>
    </div>
  );
};

export default RedCounter;

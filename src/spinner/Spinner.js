import React from "react";
import spinnerimg from "../assets/images/Loading_icon.gif";

const Spinner = () => {
  return (
    <>
      <div>
        <img
          src={spinnerimg}
          alt="spinner"
          className="d-block m-auto"
          style={{ width: "200px" }}
        ></img>
      </div>
    </>
  );
};

export default Spinner;

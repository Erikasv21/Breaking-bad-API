import React from "react";
import spinner from "../../img/spinner (1).gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="Loading"
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;

import React from "react";

const Squire = ({ onSquareClick, value }) => {
  const buttonStyle = {minWidth: "100px", minHeight: "40px" };
  return (
    <button
      className="button-squire"
      style={buttonStyle}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Squire;

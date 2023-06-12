import React from "react";

const Square = ({ onSquareClick, value, disabled }) => {
  return (
    <button
      className="button-square"
      onClick={onSquareClick}
      disabled={disabled}
    >
      <span className="button-text">{value}</span>
    </button>
  );
};

export default Square;

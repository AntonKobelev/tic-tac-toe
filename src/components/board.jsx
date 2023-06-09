import React, { useState } from "react";
import Squire from "./squire";

const Board = () => {
  const [squires, setSquires] = useState(Array(9).fill(null));
  console.log(squires);
  const handleClick = (item) => {
    const newSquiresCopy = [...squires];
    newSquiresCopy[item - 1] = "X";
    setSquires(newSquiresCopy);
  };

  return (
    <div className="board-container">
      <div className="board-row">
        <Squire onSquareClick={() => handleClick(1)} value={squires[0]} />
        <Squire onSquareClick={() => handleClick(2)} value={squires[1]} />
        <Squire onSquareClick={() => handleClick(3)} value={squires[2]} />
      </div>
      <div className="board-row">
        <Squire onSquareClick={() => handleClick(4)} value={squires[3]} />
        <Squire onSquareClick={() => handleClick(5)} value={squires[4]} />
        <Squire onSquareClick={() => handleClick(6)} value={squires[5]} />
      </div>
      <div className="board-row">
        <Squire onSquareClick={() => handleClick(7)} value={squires[6]} />
        <Squire onSquareClick={() => handleClick(8)} value={squires[7]} />
        <Squire onSquareClick={() => handleClick(9)} value={squires[8]} />
      </div>
    </div>
  );
};

export default Board;

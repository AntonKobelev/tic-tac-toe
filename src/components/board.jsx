import React, { useEffect, useState } from "react";
import Square from "./square";
import calculateWinner from "../utils/calculateWinner";
import TextUserResult from "./textUserResult";
import ButtonReset from "./buttonReset";
import fireWorks from "../utils/fireWorks";

const Board = () => {
  const [squares, setSquires] = useState(Array(9).fill(null));
  const [isNextTurn, setIsNextTurn] = useState(true);
  const [resultUser, setResultUser] = useState({ userX: 0, userO: 0 });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (calculateWinner(squares) === "X") {
      setResultUser((prevResultUser) => ({
        ...prevResultUser,
        userX: prevResultUser.userX + 1,
      }));
      setIsButtonDisabled(true);
    } else if (calculateWinner(squares) === "O") {
      setResultUser((prevResultUser) => ({
        ...prevResultUser,
        userO: prevResultUser.userO + 1,
      }));
      setIsButtonDisabled(true);
    } else {
      if (!squares.includes(null)) {
        setIsButtonDisabled(true);
      }
    }
  }, [squares]);

  useEffect(() => {
    if (resultUser.userX === 3) {
      fireWorks();
    } else if (resultUser.userO === 3) {
      fireWorks();
    }
  }, [resultUser.userX, resultUser.userO]);

  const handleClick = (item) => {
    const newSquaresCopy = [...squares];
    if (isNextTurn && newSquaresCopy[item - 1] == null) {
      newSquaresCopy[item - 1] = "X";
      setSquires(newSquaresCopy);
      setIsNextTurn(false);
    } else if (!isNextTurn && newSquaresCopy[item - 1] == null) {
      newSquaresCopy[item - 1] = "O";
      setSquires(newSquaresCopy);
      setIsNextTurn(true);
    }
  };

  const handleClickReset = () => {
    setSquires(Array(9).fill(null));
    setIsNextTurn(true);
    setIsButtonDisabled(false);
  };

  return (
    <div>
      <div className="grid-container">
        {squares.map((value, index) => (
          <Square
            key={index}
            onSquareClick={() => handleClick(index + 1)}
            value={value}
            disabled={isButtonDisabled}
          />
        ))}
      </div>
      <ButtonReset onButtonResetClick={() => handleClickReset()} />
      <h2>Счет игры</h2>
      <TextUserResult score={resultUser} />
      {resultUser.userX === 3 || resultUser.userO === 3 ? (
        <canvas
          width="968"
          height="480"
          id="fireworks-canvas"
          className="fireworks"
        ></canvas>
      ) : (
        ""
      )}
      {resultUser.userX === 3 ? <h2>Выйграл игрок 1</h2> : ""}
      {resultUser.userO === 3 ? <h2>Выйграл игрок 2</h2> : ""}
    </div>
  );
};

export default Board;

import React from "react";

const TextUserResult = ({ score }) => {
  return (
    <div className="grid-container-text-result">
      <h2>Игрок 1</h2>
      <h2>Игрок 2</h2>
      <h2>{score.userX}</h2>
      <h2>{score.userO}</h2>
    </div>
  );
};

export default TextUserResult;

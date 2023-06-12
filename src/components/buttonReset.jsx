import React from "react";

const ButtonReset = ({ onButtonResetClick }) => {
  return (
    <div className="d-grid gap-2 col-3 mx-auto">
      <button
        type="button"
        className="btn btn-primary"
        onClick={onButtonResetClick}
      >
        Сброс
      </button>
    </div>
  );
};

export default ButtonReset;

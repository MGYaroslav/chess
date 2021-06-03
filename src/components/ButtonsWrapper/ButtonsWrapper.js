import React from "react";
import "./ButtonsWrapper.css";

export const ButtonsWrapper = ({ boardSize, setBoardSize, filled }) => {
    const minBoardSize = 1;
    const maxBoardSize = 20;

  const handleMinus = () => boardSize > minBoardSize && setBoardSize((boardSize -= 1));
  const handlePlus = () => boardSize < maxBoardSize && setBoardSize((boardSize += 1));

  return (
    <div className="buttons-wrapper">
      <button disabled={filled} onClick={handleMinus}>- 1</button>
      <button disabled={filled} onClick={handlePlus}>+ 1</button>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { ChessBoard } from "../ChessBoard/ChessBoard";
import { ButtonsWrapper } from "../ButtonsWrapper/ButtonsWrapper";
import { FigureBlock } from "../FigureBlock/FigureBlock";
import { isNumber, chunk } from "lodash";
import "./AppWrapper.css";

export const AppWrapper = () => {
  const [boardSize, setBoardSize] = useState(5);
  const [selectedFigure, setSelectedFigure] = useState(null);
  const [matrix, setMatrix] = useState([]);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (isNumber(boardSize)) {
      let doubleNumber = boardSize ** 2;
      const matrix = chunk(
        [
          ...Array(doubleNumber)
            .fill()
            .map((item, index) => ({
              cellFree: true,
              cellNumber: index,
              cellLocked: false,
              figure: null,
            })),
        ],
        boardSize
      );
      setMatrix(matrix);
    }
  }, [boardSize]);

  const handleFill = () => {
    const newMatrix = [...matrix];
    const maxNumber = boardSize - 1;
    switch (selectedFigure.name) {
      case "pawn":
        const movePawnForward = 3;
        if (newMatrix[0][0].cellFree === true) {
          for (
            var pawnColumn = 0;
            pawnColumn <= maxNumber;
            pawnColumn += movePawnForward
          ) {
            for (var pawnRow = 0; pawnRow <= maxNumber; pawnRow++) {
              newMatrix[pawnRow][pawnColumn].figure = selectedFigure;
              newMatrix[pawnRow][pawnColumn].cellFree = false;
            }
          }
        }
        break;
      case "king":
        const moveKingForward = 2;
        if (newMatrix[0][0].cellFree === true) {
          for (
            var kingColumn = 0;
            kingColumn <= maxNumber;
            kingColumn += moveKingForward
          ) {
            for (
              var kingRow = 0;
              kingRow <= maxNumber;
              kingRow += moveKingForward
            ) {
              newMatrix[kingRow][kingColumn].figure = selectedFigure.link;
              newMatrix[kingRow][kingColumn].cellFree = false;
            }
          }
        }
        break;
      default:
        console.log("DEFAULT VALUE");
    }
    setMatrix(newMatrix);
    setFilled(true);
  };

  const handleReset = () => {
    if (isNumber(boardSize)) {
      let doubleNumber = boardSize ** 2;
      const matrix = chunk(
        [
          ...Array(doubleNumber)
            .fill()
            .map((item, index) => ({
              cellFree: true,
              cellNumber: index,
              cellLocked: false,
              figure: null,
            })),
        ],
        boardSize
      );
      setMatrix(matrix);
    }
    setSelectedFigure(null);
    setFilled(false);
  };

  return (
    <div className="wrapper">
      <ChessBoard
        boardSize={boardSize}
        matrix={matrix}
        selectedFigure={selectedFigure}
        filled={filled}
      />
      <div className="right-column">
        <div>
          <p className="title">
            Border size {boardSize} x {boardSize}
          </p>
        </div>
        <ButtonsWrapper
          boardSize={boardSize}
          setBoardSize={setBoardSize}
          filled={filled}
        />
        <FigureBlock
          selectedFigure={selectedFigure}
          setSelectedFigure={setSelectedFigure}
          filled={filled}
        />
        <div className="app-buttons-wrapper">
          <button disabled={!selectedFigure || filled} onClick={handleFill}>
            Fill
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

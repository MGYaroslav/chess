import React from "react";
import "./ChessBoard.css";

export const ChessBoard = ({ boardSize, matrix, selectedFigure, filled }) => {
  return (
    <div className="chess-wrapper">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((col, colIndex) => (
            <div
              disabled={!filled}
              key={colIndex}
              className={`square ${
                boardSize % 2
                  ? col.cellNumber % 2
                    ? "black"
                    : "white"
                  : rowIndex % 2
                  ? col.cellNumber % 2
                    ? "white"
                    : "black"
                  : col.cellNumber % 2
                  ? "black"
                  : "white"
              }`}s
            >
              {col.figure !== null ? (
                <img
                  className="chess-image"
                  src={selectedFigure.link}
                  alt={selectedFigure.name}
                />
              ) : (
                colIndex
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

import React from "react";
import "./FigureBlock.css";
import { figures } from "../../helpers/chessIcons";

export const FigureBlock = ({ selectedFigure, setSelectedFigure, filled }) => {
  return (
    <div className="icons-wrapper">
      {figures.map((item) => (
        <div
          key={item.name}
          disabled={filled}
          className={`figure ${item === selectedFigure && "selected-figure"}`}
          onClick={() => setSelectedFigure(item)}
        >
          <img className="figure-image" src={item.link} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

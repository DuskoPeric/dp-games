import "./SnakePage.scss";
import React, { useEffect, useState } from "react";

const SnakePage = () => {
  const moveSnake = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "ArrowRight":
        setSnakeX(snakeX + 8);
        break;
      case "ArrowLeft":
        setSnakeX(snakeX - 8);
        break;
      case "ArrowUp":
        setSnakeY(snakeY - 8);
        break;
      case "ArrowDown":
        setSnakeY(snakeY + 8);
        break;
      default:
        break;
    }
  };
  const [snakeX, setSnakeX] = useState(0);
  const [snakeY, setSnakeY] = useState(0);
  useEffect(() => {
    document.addEventListener("keydown", moveSnake);
    return () => {
      document.removeEventListener("keydown", moveSnake);
    };
  });

  return (
    <div className="snake-game">
      <h2>Snake Game</h2>
      <div className="snake-game__content">
        <div className="snake-game__content__board">
          <div
            style={{ left: snakeX + "px", top: snakeY + "px" }}
            className="snake-game__content__board__snake"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SnakePage;

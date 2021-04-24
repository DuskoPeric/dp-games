import "./SnakePage.scss";
import React, { useEffect, useState } from "react";

const SnakePage = () => {
  const [snakeX, setSnakeX] = useState(10);
  const [snakeY, setSnakeY] = useState(10);
  const [startGame, setStratGame] = useState(true);
  let interval;

  const startNewGame = () => {
    setSnakeX(10);
    setSnakeY(10);
    setStratGame(true);
  };

  const gameOver = () => {
    if (interval) {
      clearInterval(interval);
    }
    setStratGame(false);
  };

  function startMoving(direction, value) {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(function () {
      if (direction === "x") {
        if (value) {
          setSnakeX((prevState) => {
            if (prevState >= 290) {
              gameOver();
            }
            return prevState + 10;
          });
        } else {
          setSnakeX((prevState) => {
            if (prevState < 0) {
              gameOver();
            }
            return prevState - 10;
          });
        }
      } else {
        if (value) {
          setSnakeY((prevState) => prevState - 10);
        } else {
          setSnakeY((prevState) => prevState + 10);
        }
      }
    }, 50);
  }
  const moveSnake = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "ArrowRight":
        startMoving("x", true);
        break;
      case "ArrowLeft":
        startMoving("x", false);
        break;
      case "ArrowUp":
        startMoving("y", true);
        break;
      case "ArrowDown":
        startMoving("y", false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", moveSnake);
    return () => {
      document.removeEventListener("keyup", moveSnake);
    };
  }, [startGame]);

  return (
    <div className="snake-game">
      <h2>Snake Game</h2>
      <div className="snake-game__content">
        {startGame ? (
          <div className="snake-game__content__board">
            <div
              style={{ left: snakeX + "px", top: snakeY + "px" }}
              className="snake-game__content__board__snake"
            ></div>
          </div>
        ) : (
          <div className="snake-game__content__gameover">
            <button onClick={startNewGame}>Play again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakePage;

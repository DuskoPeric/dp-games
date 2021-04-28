import "./SnakePage.scss";
import React, { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";
import { getSnakeData, getAppleData } from "./data";
import { generatePosition } from "./utils";


const SnakePage = () => {
    const initialSnakeState = getSnakeData();
    const initialAppleState = getAppleData();
    const [snakeBody, setSnakeBody] = useState(initialSnakeState)
    const [startGame, setStratGame] = useState(false);
    const [apple, setApple] = useState({ x: 130, y: 100 });
    const [firstPlay, setFirstPlay] = useState(true);

    const startNewGame = () => {
        if (firstPlay) {
            setFirstPlay(false);
        }
        setStratGame(true);
        setSnakeBody(initialSnakeState);
        setApple(initialAppleState);
    };

    const gameOver = () => {
        setStratGame(false);
    };

    const addNewPart = (tmpArr, incrementX, incrementY) => {
        const nd = [];
        for (let k = 0; k < tmpArr[tmpArr.length - 1].directions.length; k++) {
            const ca = { ...tmpArr[tmpArr.length - 1].directions[k] }
            nd.push(ca)

        }
        tmpArr.push({
            x: tmpArr[tmpArr.length - 1].x + incrementX,
            y: tmpArr[tmpArr.length - 1].y + incrementY,

            directions: nd
        })
    }

    useInterval(function () {
        let isOver = false;
        for (let i = 0; i < snakeBody.length; i++) {
            if (isOver) {
                break;
            }
            for (let j = 0; j < snakeBody[i].directions.length; j++) {

                const currentPositionX = snakeBody[i].x;
                const currentPositionY = snakeBody[i].y;
                const element = snakeBody[i].directions[j];
                if (!element.done) {

                    switch (element.d) {
                        case "ArrowRight":

                            if (currentPositionX < element.lx) {
                                setSnakeBody((prevState) => {
                                    if (prevState[prevState.length - 1].x >= 295) {
                                        gameOver();
                                        isOver = true;

                                    } else {
                                        let newPart = false;
                                        if (i === snakeBody.length - 1 && prevState[prevState.length - 1].x === apple.x && prevState[prevState.length - 1].y === apple.y) {
                                            console.log('uhvatio')

                                            setApple(generatePosition(prevState));
                                            newPart = true;
                                        }
                                        const tmpArr = [...prevState];

                                        tmpArr[i].x = tmpArr[i].x + 10;

                                        if (tmpArr[i].x === element.lx) {
                                            //tmpArr[i].directions[j].done = true;
                                            tmpArr[i].directions.shift();
                                        }
                                        if (newPart) {
                                            addNewPart(tmpArr, +10, null)

                                        }

                                        return tmpArr;
                                    }

                                })
                            }

                            break;
                        case "ArrowDown":

                            if (currentPositionY < element.ly) {
                                setSnakeBody((prevState) => {
                                    if (prevState[prevState.length - 1].y >= 295) {
                                        gameOver();
                                        isOver = true;
                                    } else {
                                        let newPart = false;
                                        if (i === snakeBody.length - 1 && prevState[prevState.length - 1].x === apple.x && prevState[prevState.length - 1].y === apple.y) {
                                            console.log('uhvatio')
                                            setApple(generatePosition(prevState));
                                            newPart = true;
                                        }
                                        const tmpArr = [...prevState];

                                        tmpArr[i].y = tmpArr[i].y + 10;
                                        if (tmpArr[i].y === element.ly) {
                                            //tmpArr[i].directions[j].done = true;
                                            tmpArr[i].directions.shift();
                                        }
                                        if (newPart) {
                                            addNewPart(tmpArr, null, +10)

                                        }
                                        return tmpArr;
                                    }

                                })
                            }
                            break;
                        case "ArrowLeft":

                            if (currentPositionX > element.lx) {
                                setSnakeBody((prevState) => {
                                    if (prevState[prevState.length - 1].x <= -5) {
                                        gameOver();
                                        isOver = true;
                                    } else {
                                        let newPart = false;
                                        if (i === snakeBody.length - 1 && prevState[prevState.length - 1].x === apple.x && prevState[prevState.length - 1].y === apple.y) {
                                            console.log('uhvatio')

                                            setApple(generatePosition(prevState));
                                            newPart = true;
                                        }
                                        const tmpArr = [...prevState];


                                        tmpArr[i].x = tmpArr[i].x - 10;
                                        if (tmpArr[i].x === element.lx) {
                                            //tmpArr[i].directions[j].done = true;
                                            tmpArr[i].directions.shift();
                                        }
                                        if (newPart) {
                                            addNewPart(tmpArr, -10, null)
                                        }

                                        return tmpArr;
                                    }

                                })
                            }

                            break;
                        case "ArrowUp":

                            if (currentPositionY > element.ly) {
                                setSnakeBody((prevState) => {
                                    if (prevState[prevState.length - 1].y <= -5) {

                                        gameOver();
                                        isOver = true;
                                    } else {
                                        let newPart = false;
                                        if (i === snakeBody.length - 1 && prevState[prevState.length - 1].x === apple.x && prevState[prevState.length - 1].y === apple.y) {
                                            console.log('uhvatio')
                                            setApple(generatePosition(prevState));
                                            newPart = true;
                                        }
                                        const tmpArr = [...prevState];

                                        tmpArr[i].y = tmpArr[i].y - 10;
                                        if (tmpArr[i].y === element.ly) {
                                            //tmpArr[i].directions[j].done = true;
                                            tmpArr[i].directions.shift();
                                        }
                                        if (newPart) {
                                            addNewPart(tmpArr, null, -10)

                                        }
                                        return tmpArr;
                                    }

                                })
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                }
            }
            if (i === snakeBody.length - 1) {
                for (let l = 0; l < snakeBody.length - 1; l++) {
                    if (snakeBody[snakeBody.length - 1].x === snakeBody[l].x && snakeBody[snakeBody.length - 1].y === snakeBody[l].y) {
                        gameOver();
                        isOver = true;
                    }

                }
            }
        }

    }, startGame ? 50 : null);


    const moveSnake = (e) => {
        if (startGame) {
            setSnakeBody(prevState => {
                const tmpArr = [...prevState];
                const lastDirection = tmpArr[tmpArr.length - 1].directions[tmpArr[tmpArr.length - 1].directions.length - 1].d;
                if ((lastDirection === 'ArrowRight' && e.key === 'ArrowLeft')
                    || (lastDirection === 'ArrowLeft' && e.key === 'ArrowRight')
                    || (lastDirection === 'ArrowUp' && e.key === 'ArrowDown')
                    || (lastDirection === 'ArrowDown' && e.key === 'ArrowUp')) {
                    return tmpArr;
                }
                for (let i = 0; i < tmpArr.length; i++) {
                    tmpArr[i].directions[tmpArr[i].directions.length - 1].lx = tmpArr[tmpArr.length - 1].x;
                    tmpArr[i].directions[tmpArr[i].directions.length - 1].ly = tmpArr[tmpArr.length - 1].y;
                    if (i === tmpArr.length - 1) {
                        tmpArr[i].directions[tmpArr[i].directions.length - 1].done = true;
                        tmpArr[i].directions.shift();
                    }
                    tmpArr[i].directions.push({
                        d: e.key,
                        sx: tmpArr[tmpArr.length - 1].x,
                        sy: tmpArr[tmpArr.length - 1].y,
                        lx: e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -999 : 999,
                        ly: e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -999 : 999,
                        done: false
                    })
                }
                return tmpArr;
            })
        }
    };

    useEffect(() => {
        document.addEventListener("keyup", moveSnake);
        return () => {
            document.removeEventListener("keyup", moveSnake);
        };
    });

    return (
        <div className="snake-game">
            <h2>Retro Snake</h2>
            <div className="snake-game__content">
                <div className="snake-game__content__holder">
                    {startGame ? (

                        <div className="snake-game__content__holder__board">
                            {snakeBody.map((part, index) => <div
                                key={index} style={{ left: part.x + "px", top: part.y + "px" }}
                                className="snake-game__content__holder__board__snake"
                            ></div>)}

                            <div className="snake-game__content__holder__board__apple" style={{ left: apple.x + "px", top: apple.y + "px" }}></div>
                        </div>
                    ) : (
                            <div className="snake-game__content__holder__gameover">
                                <button onClick={startNewGame}>{firstPlay ? 'Start' : 'Play again'}</button>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default SnakePage;

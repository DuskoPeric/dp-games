import "./SnakePage.scss";
import React, { useEffect, useState } from "react";
import useInterval from "../../hooks/useInterval";

const SnakePage = () => {
    const initialState = [
        {
            x: 10,
            y: 100,
            color: 'red',
            directions: [
                {
                    d: 'ArrowRight',
                    sx: 10,
                    sy: 10,
                    lx: 999,
                    ly: 10,
                    done: false
                }
            ]
        },
        {
            x: 20,
            y: 100,
            color: 'blue',
            directions: [
                {
                    d: 'ArrowRight',
                    sx: 20,
                    sy: 10,
                    lx: 999,
                    ly: 10,
                    done: false
                }
            ]
        },
        {
            x: 30,
            y: 100,
            color: 'white',
            directions: [
                {
                    d: 'ArrowRight',
                    sx: 20,
                    sy: 10,
                    lx: 999,
                    ly: 10,
                    done: false
                }
            ]
        },
        {
            x: 40,
            y: 100,
            color: 'orange',
            directions: [
                {
                    d: 'ArrowRight',
                    sx: 20,
                    sy: 10,
                    lx: 999,
                    ly: 10,
                    done: false
                }
            ]
        }

    ];
    const [snakeBody, setSnakeBody] = useState(initialState)
    const [startGame, setStratGame] = useState(true);
    const [apple, setApple] = useState({ x: 130, y: 100 });

    const startNewGame = () => {
        setStratGame(true);
        setSnakeBody(initialState);
    };

    const gameOver = () => {
        setStratGame(false);
    };


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
                                            setApple({ x: (Math.floor(Math.random() * (30 - 0 + 1)) + 0) * 10, y: (Math.floor(Math.random() * (30 - 0 + 1)) + 0) * 10 });
                                            newPart = true;
                                        }
                                        const tmpArr = [...prevState];

                                        tmpArr[i].x = tmpArr[i].x + 10;

                                        if (tmpArr[i].x === element.lx) {
                                            //tmpArr[i].directions[j].done = true;
                                            tmpArr[i].directions.shift();
                                        }
                                        if (newPart) {
                                            const nd = [];
                                            for (let k = 0; k < tmpArr[tmpArr.length - 1].directions.length; k++) {
                                                const ca = { ...tmpArr[tmpArr.length - 1].directions[k] }
                                                nd.push(ca)

                                            }
                                            tmpArr.push({
                                                x: tmpArr[tmpArr.length - 1].x + 10,
                                                y: tmpArr[tmpArr.length - 1].y,
                                                color: 'gray',
                                                directions: nd
                                            })

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
                                            setApple({ x: (Math.floor(Math.random() * (30 - 0 + 1)) + 0) * 10, y: (Math.floor(Math.random() * (30 - 0 + 1)) + 0) * 10 });
                                            newPart = true;
                                        }
                                        const tmpArr = [...prevState];

                                        tmpArr[i].y = tmpArr[i].y + 10;
                                        if (tmpArr[i].y === element.ly) {
                                            //tmpArr[i].directions[j].done = true;
                                            tmpArr[i].directions.shift();
                                        }
                                        if (newPart) {
                                            const nd = [];
                                            for (let k = 0; k < tmpArr[tmpArr.length - 1].directions.length; k++) {
                                                const ca = { ...tmpArr[tmpArr.length - 1].directions[k] }
                                                nd.push(ca)

                                            }
                                            tmpArr.push({
                                                x: tmpArr[tmpArr.length - 1].x,
                                                y: tmpArr[tmpArr.length - 1].y + 10,
                                                color: 'gray',
                                                directions: nd
                                            })

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
                                            setApple({ x: (Math.floor(Math.random() * (30 - 0 + 1)) + 0) * 10, y: (Math.floor(Math.random() * (30 - 0 + 1)) + 0) * 10 });
                                            newPart = true;
                                        }
                                        const tmpArr = [...prevState];


                                        tmpArr[i].x = tmpArr[i].x - 10;
                                        if (tmpArr[i].x === element.lx) {
                                            //tmpArr[i].directions[j].done = true;
                                            tmpArr[i].directions.shift();
                                        }
                                        if (newPart) {
                                            const nd = [];
                                            for (let k = 0; k < tmpArr[tmpArr.length - 1].directions.length; k++) {
                                                const ca = { ...tmpArr[tmpArr.length - 1].directions[k] }
                                                nd.push(ca)

                                            }
                                            tmpArr.push({
                                                x: tmpArr[tmpArr.length - 1].x - 10,
                                                y: tmpArr[tmpArr.length - 1].y,
                                                color: 'gray',
                                                directions: nd
                                            })

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
                                            setApple({ x: (Math.floor(Math.random() * (30 - 0 + 1)) + 0) * 10, y: (Math.floor(Math.random() * (30 - 0 + 1)) + 0) * 10 });
                                            newPart = true;
                                        }
                                        const tmpArr = [...prevState];

                                        tmpArr[i].y = tmpArr[i].y - 10;
                                        if (tmpArr[i].y === element.ly) {
                                            //tmpArr[i].directions[j].done = true;
                                            tmpArr[i].directions.shift();
                                        }
                                        if (newPart) {
                                            const nd = [];
                                            for (let k = 0; k < tmpArr[tmpArr.length - 1].directions.length; k++) {
                                                const ca = { ...tmpArr[tmpArr.length - 1].directions[k] }
                                                nd.push(ca)

                                            }
                                            tmpArr.push({
                                                x: tmpArr[tmpArr.length - 1].x,
                                                y: tmpArr[tmpArr.length - 1].y - 10,
                                                color: 'gray',
                                                directions: nd
                                            })

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
        }

    }, startGame ? 100 : null);


    const moveSnake = (e) => {
        if (startGame) {
            setSnakeBody(prevState => {
                const tmpArr = [...prevState];
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
            <h2>Snake Game</h2>
            <div className="snake-game__content">
                {startGame ? (
                    <div className="snake-game__content__board">
                        {snakeBody.map((part, index) => <div
                            key={index} style={{ left: part.x + "px", top: part.y + "px", background: part.color }}
                            className="snake-game__content__board__snake"
                        ></div>)}

                        <div className="snake-game__content__board__apple" style={{ left: apple.x + "px", top: apple.y + "px" }}></div>
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

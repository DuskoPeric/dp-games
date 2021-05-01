import { useState } from 'react'
import './GameScreen.scss'

const Game = (props) => {
    const { activeLevel, changeMoves, gameOver, moves, backToLevel } = props;
    const [towers, setTowers] = useState([Array.from({ length: activeLevel }, (_, i) => i + 1).reverse(), [], []]);
    const [towerFrom, setTowerFrom] = useState(-1);
    const [itemToMove, setItemToMove] = useState(-1);
    const copyOrder = Array.from({ length: activeLevel }, (_, i) => i + 1).reverse();

    function switchBlock(e) {
        const t = towers[e];
        if (towerFrom >= 0) {
            if (towerFrom === e) {
                setTowerFrom(-1);

            } else {

                if (t[t.length - 1] > itemToMove || t.length < 1) {
                    t.push(itemToMove);
                    const tmpArr = [...towers];
                    tmpArr[towerFrom].pop();
                    setTowers(tmpArr);
                    setTowerFrom(-1);
                    changeMoves()
                    if (towers[2].length === copyOrder.length) {
                        if (towers[2].every((e, t) => e === copyOrder[t])) {
                            gameOver();
                        }
                    }

                }

            }
        } else if (t.length > 0) {
            setTowerFrom(e);
            setItemToMove(t[t.length - 1]);
        }
    }


    return (
        <div className="hanoi-game-screen">
            <div className="hanoi-game-screen__towers">
                {towers.map((tower, index) => <div key={tower + index} className={`tower${index}`}><div>
                    {tower.map((block) =>
                        <div key={tower + block} className={`block${block}`}></div>
                    )}</div>
                </div>)}

            </div>
            <div className="hanoi-game-screen__actionBtns">
                <div>
                    <button className={towerFrom === 0 ? 'active' : null} id="b0" onClick={() => { switchBlock(0) }}>I</button>
                </div>
                <div>
                    <button className={towerFrom === 1 ? 'active' : null} id="b1" onClick={() => { switchBlock(1) }}>II</button>
                </div>
                <div>
                    <button className={towerFrom === 2 ? 'active' : null} id="b2" onClick={() => { switchBlock(2) }}>III</button>
                </div>
            </div>
            <div className="hanoi-game-screen__score">
                <div className="hanoi-game-screen__score__moves">
                    <p>Moves</p>
                    <p id="moves">{moves}</p>
                </div>
                <button id="restart" onClick={backToLevel}>Restart</button>
            </div>
        </div>
    )
}

export default Game

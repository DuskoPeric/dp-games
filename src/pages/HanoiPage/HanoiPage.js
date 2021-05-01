import { useState } from 'react'
import ChooseLevel from "./ChooseLevel/ChooseLevel";
import Win from "./Win/Win";
import Game from "./GameScreen/GameScreen";
import './HanoiPage.scss'

const HanoiPage = () => {
    const [phase, setPhase] = useState('level');
    const [activeLevel, setActiveLevel] = useState(3);
    const [moves, setMoves] = useState(0);


    return (<div className="hanoi-game-content">
        {phase === 'level' && <ChooseLevel activeLevel={activeLevel} changeActiveLevel={(level) => { setActiveLevel(level) }} startGame={() => { setPhase('game') }} />}
        {phase === 'win' && <Win moves={moves} newGame={() => { setMoves(0); setPhase('level') }} />}
        {phase === 'game' && <Game activeLevel={activeLevel} moves={moves} backToLevel={() => { setMoves(0); setPhase('level') }} gameOver={() => { setPhase('win') }} changeMoves={() => { setMoves((prevState) => prevState + 1) }} />}
    </div>)
}
export default HanoiPage;

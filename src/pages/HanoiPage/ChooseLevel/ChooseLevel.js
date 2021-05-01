import React from 'react'
import './ChooseLevel.scss'

const ChooseLevel = (props) => {
    const levels = [3, 4, 5, 6, 7, 8, 9]
    const { activeLevel, changeActiveLevel, startGame } = props;
    return (
        <div className="choose-level">
            <h1>Hanoi towers</h1>
            <div>
                <h2>Choose number of disks</h2>
                <div className="choose-level__disks">
                    {levels.map(level => <button key={level} className={`disk ${activeLevel === level && 'active'}`} data-nodisk={level} onClick={() => { changeActiveLevel(level) }}>{level}</button>)}
                </div>
            </div>
            <button className="choose-level__start" id="start" onClick={startGame} >Start</button>
        </div>
    )
}

export default ChooseLevel

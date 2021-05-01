import React from 'react';
import './Win.scss';

const Win = (props) => {
    const { moves, newGame } = props;
    return (
        <div className="hanoi-win">
            <h2>Well done!</h2>
            <p className="hanoi-win__moves">You finish in <span>{moves}</span> moves</p>
            <button onClick={newGame} id="newgame">New game</button>
        </div>
    )
}

export default Win

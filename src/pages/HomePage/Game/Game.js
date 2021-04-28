import { Link } from "react-router-dom";
import './Game.scss'
const Game = (props) => {
    const { name, url } = props.game;
    const image = require('../../../assets/images/' + url + '.jpg');
    return (
        <Link to={`/${url}`}>
            <div className="game-holder">
                <img src={image.default} alt={name} />
                <button>Play</button>
            </div>
        </Link>

    )
}

export default Game

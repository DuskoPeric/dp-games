import { Link } from "react-router-dom";
import './Game.scss'
const Game = (props) => {
    const { name, url } = props.game;
    const imageUrl = process.env.PUBLIC_URL + '/assets/images/' + url + '.png';
    return (
        <Link to={`/${url}`}>
            <div className="game-holder">
                <img src={imageUrl} alt={name} />
                <button>Play</button>
            </div>
        </Link>

    )
}

export default Game

import { getGames } from "./data"
import Game from './Game/Game';
import './HomePage.scss'
const HomePage = () => {
    const games = getGames();
    return <div className="games">
        {games.map(game => <Game key={game.name} game={game} />)}

    </div>
}
export default HomePage;




const GAMES = [{
    name: 'Snake',
    url: 'snake'
}]
export const getGames = () => {
    return JSON.parse(JSON.stringify(GAMES))
}
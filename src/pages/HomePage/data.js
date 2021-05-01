const GAMES = [{
    name: 'Snake',
    url: 'snake'
},
{
    name: 'Hanoi',
    url: 'hanoi'
}
]
export const getGames = () => {
    return JSON.parse(JSON.stringify(GAMES))
}
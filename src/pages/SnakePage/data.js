const SNAKEDATA = [
    {
        x: 10,
        y: 100,
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
const APPLEDATA = { x: 130, y: 100 }

export const getSnakeData = () => {
    return JSON.parse(JSON.stringify(SNAKEDATA))
}
export const getAppleData = () => {
    return JSON.parse(JSON.stringify(APPLEDATA))
}
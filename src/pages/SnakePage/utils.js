export const generatePosition = (arr) => {
    console.log('from ut')
    let isValid = false;
    let count = 0
    let x;
    let y;
    while (isValid || count === 0) {
        isValid = false;
        count++;
        x = (Math.floor(Math.random() * (29 - 0 + 1)) + 0) * 10;
        y = (Math.floor(Math.random() * (29 - 0 + 1)) + 0) * 10;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].x === x && arr[i].y === y) {
                isValid = true;
                break;
            }
        }

    }
    return { x, y }
}
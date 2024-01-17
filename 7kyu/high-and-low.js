// Highest and Lowest
const highAndLow = (numbers) => {
    const arrNums = numbers.split(' ').map((x) => parseInt(x))
    return [arrNums.sort((a, b) => b - a)[0], arrNums.sort((a, b) => a - b)[0]].join(' ')
}

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'), '42 -9')

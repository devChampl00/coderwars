// Square(n) Sum
const squareSum = (numbers) => numbers.map((x) => x * x).reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(squareSum([3, 4, 5]))

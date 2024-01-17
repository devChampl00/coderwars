// Find the smallest integer in the array
const findSmallestInt = (arr) => arr.sort((a, b) => a - b)[0]

console.log(findSmallestInt([1, 2, 3, -12, 5, 6]))

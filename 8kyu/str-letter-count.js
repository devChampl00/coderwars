// All Star Code Challenge #18
const strCount = (str, letter) => str.split('').filter((x) => x === letter).length

console.log(strCount('Hello', 'o'), 1)
console.log(strCount('Hello', 'l'), 2)
console.log(strCount('', 'z'), 0)

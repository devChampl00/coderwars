// Be Concise IV - Index of an element in an array
const find = (arr, el) => (arr.indexOf(el) !== -1 ? arr.indexOf(el) : 'Not found')

const arr = [1, 2, 4, 5, 6]
console.log(find(arr, 5))

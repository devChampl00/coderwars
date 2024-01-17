// Sort array by string length
const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length)

console.log(sortByLength(['Longer', 'Longest', 'Short']), ['Short', 'Longer', 'Longest'])

// Find the index of the second occurrence of a letter in a string
const secondSymbol = (str, symbol) => {
    const arr = str.split('')

    const indexes = []

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === symbol) {
            indexes.push(i)
        }
    }

    return indexes[1] ?? -1
}

console.log(secondSymbol('Hello world!!!', 'l'), 3, 'Find the index of the second symbol "l" in the string')
console.log(secondSymbol('Hello world!!!', 'o'), 7, 'Find the index of the second symbol "o" in the string')
console.log(secondSymbol('Hello world!!!', 'A'), -1, 'The symbol "A" is not in the string')
console.log(secondSymbol('', 'q'), -1, 'The symbol "q" is not in the string')
console.log(secondSymbol('Hello', '!'), -1, 'The symbol "!" is not in the string')

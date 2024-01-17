// Odd or Even?
const oddOrEven = (array) => {
    if (!array.length) {
        return 'even'
    }

    return array.reduce((acc, currVal) => acc + currVal) % 2 === 0 ? 'even' : 'odd'
}

console.log(oddOrEven([0, 1, 2]), 'odd')
console.log(oddOrEven([0, 1, 4]), 'odd')
console.log(oddOrEven([1023, 1, 3]), 'odd')
console.log(oddOrEven([]), 'even')

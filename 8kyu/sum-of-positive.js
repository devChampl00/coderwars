// Sum of positive
const positiveSum = (arr) => {
    if (arr.length) {
        arr.every((val) => {
            const index = arr.indexOf(val)
            val < 0 ? arr.splice(index, 1) : val
        })
        return arr
        return arr.reduce((acc, currVal) => acc + currVal)
    }

    return 0
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15)
console.log(positiveSum([1, -2, 3, 4, 5]), 13)
console.log(positiveSum([]), 0)
console.log(positiveSum([-1, -2, -3, -4, -5]), 0)
console.log(positiveSum([-1, 2, 3, 4, -5]), 9)

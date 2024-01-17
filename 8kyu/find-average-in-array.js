// Find Average in Array
const findAverage = (array) => {
    if (!array || array.length < 1) {
        return 0
    }

    let sum = null
    array.forEach((i) => {
        sum += i
    })

    let average = sum / array.length
    return average
}

console.log(findAverage([92, 38]))

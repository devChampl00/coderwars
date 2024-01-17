// Create Phone Number
const createPhoneNumber = (numbers) => {
    const [a, b, c, d, e, f, g, h, i, j] = numbers

    return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`
}

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890')
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890')

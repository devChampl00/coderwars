// Alternate case
const alternateCase = (str) => {
    return str
        .split('')
        .map((x) => (/[A-Z]/.test(x) ? x.toLowerCase() : x.toUpperCase()))
        .join('')
}

console.log(alternateCase('abc'), 'ABC')
console.log(alternateCase('ABC'), 'abc')
console.log(alternateCase('Hello World'), 'hELLO wORLD')

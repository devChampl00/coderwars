// Hello Name or World!
const hello = (name) => {
    if (name) {
        let nameLetters = name.split('')
        for (let i = 0; i < nameLetters.length; i++) {
            nameLetters[i] = nameLetters[i].toLowerCase()
        }
        nameLetters[0] = nameLetters[0].toUpperCase()

        return `Hello, ${nameLetters.join('')}!`
    }

    return `Hello, World!`
}

console.log(hello())
console.log(hello(''))
console.log(hello('gper'))
console.log(hello('gPER'))

// Mumbling
const duplicateLetter = (letter, count) => {
    if (typeof count != 'number') {
        return 'Second argument is not a number'
    }

    let newLetter = letter.toUpperCase()
    letter = letter.toLowerCase()

    for (let i = 0; i < count; i++) {
        newLetter += letter
    }

    return newLetter
}

const accum = (string) => {
    let letters = string.split('')

    let newLetters = []

    for (let i = 0; i < letters.length; i++) {
        newLetters.push(duplicateLetter(letters[i], i))
    }

    return newLetters.toLocaleString().replaceAll(',', '-')
}

console.log(accum('rqaezty'))

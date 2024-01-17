// Vowel Count
const getCount = (str) => {
    const vowel = ['a', 'e', 'i', 'o', 'u']

    let count = 0
    str.split('').forEach((x) => {
        vowel.includes(x) ? count++ : ''
    })

    return count
}

console.log(getCount('abajingan00hjku'))

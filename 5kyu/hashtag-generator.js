// The Hashtag Generator
const generateHashtag = (str) => {
    if (!str) return false

    const arr = str.split(' ')
    const newArr = []

    let firstLetter = ''
    let nextLetter = ''

    arr.forEach((val) => {
        firstLetter = val.charAt(0).toUpperCase()
        nextLetter = val.slice(1).toLowerCase()

        newArr.push(`${firstLetter}${nextLetter}`)
    })

    const newStr = newArr.join('')

    return !newStr || newStr.length >= 140 ? false : `#${newStr}`
}

console.log(generateHashtag(''), false)
console.log(generateHashtag(' '.repeat(200)), false)
console.log(generateHashtag('Do We have A Hashtag'), '#DoWeHaveAHashtag')
console.log(generateHashtag('Codewars'), '#Codewars')
console.log(generateHashtag('Codewars Is Nice'), '#CodewarsIsNice')
console.log(generateHashtag('Codewars is nice'), '#CodewarsIsNice')
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'), '#CodeWars')
console.log(generateHashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'), false)
console.log(generateHashtag('a'.repeat(139)), '#A' + 'a'.repeat(138))
console.log(generateHashtag('a'.repeat(140)), false)

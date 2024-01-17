// // Most frequently used words in a text

const topThreeWords = (text) => {
    const arr = text.split(' ')

    const onlyUnique = (value, index, array) => {
        return array.indexOf(value) === index
    }
    const uniqArr = arr.filter((val, i, arr) => arr.indexOf(val) === i && val !== '')

    const classifyArr = []
    for (i = 0; i < uniqArr.length; i++) {
        classifyArr.push(arr.filter((el) => el === uniqArr[i]))
    }

    const sortedArr = classifyArr.sort((a, b) => b.length - a.length)

    const result = []
    for (i = 0; i < sortedArr.length; i++) {
        if (result.length < 3) {
            result.push(sortedArr[i][0])
        }
    }

    return result
}

console.log(topThreeWords('a a a  b  c c  d d d d  e e e e e'), ['e', 'd', 'a'])
console.log(topThreeWords('a a c b b'), ['a', 'b', 'c'])
console.log(topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e'), ['e', 'ddd', 'aa'])
console.log(topThreeWords("  //wont won't won't "), ["won't", 'wont'])
console.log(topThreeWords('  , e   .. '), ['e'])
console.log(topThreeWords('  ...  '), [])
console.log(topThreeWords("  '  "), [])

// belum

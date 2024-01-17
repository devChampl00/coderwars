// Not very secure
const alphanumeric = (str) => {
    const notAllowed = [' ', '_']
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{3,}$/
}

// console.log(alphanumeric('Mazinkaiser'), true)
// console.log(alphanumeric('hello world_'), false)
// console.log(alphanumeric('PassW0rd'), true)
// console.log(alphanumeric('     '), false)

const regularExpression = /^(?=.*[0-9])[a-zA-Z0-9]{6,16}$/
if (regularExpression.test('Mazinkaiser')) {
    console.log(true)
} else {
    console.log(false)
}
// belum

const validBraces = (braces) => {
    const array = braces.split('')
    return array
}

console.log('()))', false)
console.log('()', true)
console.log('[]', true)
console.log('{}', true)
console.log('(){}[]', true)
console.log('([{}])', true)
console.log('(}', false)
console.log('[(])', false)
console.log('({})[({})]', true)
console.log('(})', false)
console.log('(({{[[]]}}))', true)
console.log('{}({})[]', true)
console.log(')(}{][', false)
console.log('())({}}{()][][', false)
console.log('(((({{', false)
console.log('}}]]))}])', false)

// belum

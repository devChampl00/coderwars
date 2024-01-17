// Extract the domain name from a URL
const domainName = (url) => {
    const array = url.split('.')
    const format = ['www', 'http://www', 'https://www']

    if (array.some((val) => format.includes(val))) {
        return array[1]
    } else {
        if (array[0].includes('//')) {
            return array[0].split('//')[1]
        } else {
            return array[0]
        }
    }
}

console.log(domainName('http://google.com'), 'google')
console.log(domainName('http://google.co.jp'), 'google')
console.log(domainName('www.xakep.ru'), 'xakep')
console.log(domainName('https://youtube.com'), 'youtube')
console.log(domainName('http://www.5-qfna3176kzi6av.tv/warez/'), '5-qfna3176kzi6av')

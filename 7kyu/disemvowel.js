//  Disemvowel Trolls
const disemvowel = (str) => {
    const arr = str.split('')
    arr.forEach((x) => {
        if (['a', 'e', 'i', 'o', 'u'].includes(x)) {
            arr.splice(arr.indexOf(x), 1)
        }
    })

    return arr.join('')
}

console.log(disemvowel('This website is for losers LOL!'), 'Ths wbst s fr lsrs LL!')
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
console.log(disemvowel('What are you, a communist?'), 'Wht r y,  cmmnst?')

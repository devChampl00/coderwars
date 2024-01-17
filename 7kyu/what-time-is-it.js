// What time is it?
const getMilitaryTime = (input) => {
    const arr = input.split('')

    let hour = parseInt(arr[0] + arr[1])
    if (arr[8] == 'P') {
        if (hour != 12) hour += 12
    } else {
        if (hour == 12) hour -= 12
    }
    hour = ('0' + hour).slice(-2)

    const min = [arr[3], arr[4]].join('')
    const sec = [arr[6], arr[7]].join('')

    return `${hour}:${min}:${sec}`
}

console.log(getMilitaryTime('12:00:01AM'), '00:00:01')
console.log(getMilitaryTime('11:46:47PM'), '23:46:47')
// console.log(getMilitaryTime('11:46:47PM'))
// console.log(getMilitaryTime('10:46:47PM'))
// console.log(getMilitaryTime('09:46:47PM'))
// console.log(getMilitaryTime('08:46:47PM'))
// console.log(getMilitaryTime('07:46:47PM'))
// console.log(getMilitaryTime('06:46:47PM'))
// console.log(getMilitaryTime('05:46:47PM'))
// console.log(getMilitaryTime('04:46:47PM'))
// console.log(getMilitaryTime('03:46:47PM'))
// console.log(getMilitaryTime('02:46:47PM'))
// console.log(getMilitaryTime('01:46:47PM'))
// console.log(getMilitaryTime('12:46:47PM'))

// if (arr[8] === 'P') {
//     hours += 12
// } else {
//     hours -= 12
// }

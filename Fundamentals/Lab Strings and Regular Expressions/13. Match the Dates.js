"use strict"
function matchDate(date) {
    let regex = /\b([0-9]{1,2})\-([a-z]{3})\-(\d{4})\b/mgi
    let result = [],match
    for (let items of date) {
        while (match=regex.exec(items)){
            result.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`)
        }
    }
    console.log(result.join('\n'))
}

matchDate('I am born on 30-Dec-1994.\n' +
    'This is not date: 512-Jan-1996.\n' +
    'My father is born on the 29-Jul-1955.\n')
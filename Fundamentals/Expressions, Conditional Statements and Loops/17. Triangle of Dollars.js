"use strict";
function triangleOfDollars(number) {
    let line = ''
    for (let i = 1; i <= number; i++)
    {
        for (let j = i; j <=i; j++) {
            line +="$"
        }
        console.log(line)
    }
}
triangleOfDollars(3)
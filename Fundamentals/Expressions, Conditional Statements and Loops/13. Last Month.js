"use strict";
function lastMounth([dey, mounth, year]) {
    let date = new Date(year,mounth-1,0)
    console.log(date.getDate())
}
lastMounth([17, 3, 2002])
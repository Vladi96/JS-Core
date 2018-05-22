"use strict";
function usMeters(inches) {
    let foot = Math.floor((inches) / 12);
    let remainder = inches % 12;
    console.log(`${foot}' -${remainder}"`)
}
usMeters(14)
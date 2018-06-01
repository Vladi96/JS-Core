"use strict";
function capitalize(text) {
    let a = text.toLowerCase().split(' ').map(w => w[0].toUpperCase() + w.substr(1)).join(" ")
    console.log(a)
}
capitalize('Capitalize these words')
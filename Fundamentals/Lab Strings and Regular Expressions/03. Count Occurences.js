"use strict";

function countOccurences(str, text) {
    let count = 0
    let index = 0
    index = text.indexOf(str)
    while (index !== -1) {
        count++
        index++
        index = text.indexOf(str,index)
    }
    console.log(count)
}   

countOccurences('the', 'the apple the is not found becouse thethe')
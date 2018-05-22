"use strict";
function speedLimitedRadar([km, area]) {
    let speedLimited=0
    let speedLimitedToPrint = function (km, limited) {
        let sum = limited - km
        if (sum<0){
            if(sum<= -20){
                if(sum>= -40){
                   return console.log('excessive speeding')
                }
                else {
                    return console.log('reckless driving')
                }
            }
            return console.log('speeding')
        }
    }
    switch (String(area)){
        case 'motorway': speedLimited = 130
            break
        case 'interstate': speedLimited = 90
            break
        case 'residential': speedLimited = 20
            break
        case 'city': speedLimited = 50
            break
    }
    speedLimitedToPrint(km,speedLimited)
}
speedLimitedRadar([11, 'city'])
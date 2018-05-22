"use strict";
function pointInRectangle([x, y, xMin, xMax, yMin, yMax]) {
    if((x >= xMin && x <= xMax) && (y <= yMax && y>=yMin)){
        console.log("inside")
    }
    else {
        console.log("outside")
    }
}
pointInRectangle([8,-1,2,12,-3,3])
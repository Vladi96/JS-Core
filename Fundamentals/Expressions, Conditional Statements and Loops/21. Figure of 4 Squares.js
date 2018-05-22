"use strict";
function printSqeares(n) {
    let lines=''
    if (n%2===0)
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < 2*n-1; j++) {
            if ((j===0 || j=== n-1 || j===2*n-2) && (i===0 || i===n-2 || i===n/2-1)){
                lines+='+'
            }
            else if ((i!==0 && i!==n/2-1 && i!==n-2) && (j===0 || j==2*n-2 || j===n-1)){
                lines+="|"
            }
            else if ((i!==0 && i!==n/2-1 && i!==n-2) &&(j!==0 || j!==2*n-2 || j!==n-1)){
                lines+=" "
            }
            else {
                lines+='-'
            }
        }
       lines+="\n"
    }
    else{
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < 2*n-1; j++) {
                if ((j===0 || j=== n-1 || j===2*n-2) && (i===0 || i===n-1 || i===Math.ceil(n/2)-1)){
                    lines+='+'
                }
                else if ((i!==0 || i!==n-1 || i!==Math.ceil(n/2)-1) && (j===0 || j==2*n-2 || j===n-1)){
                    lines+="|"
                }
                else if ((i!==0 && i!==Math.ceil(n/2)-1 && i!==n-1) && (j!==0 || j!==2*n-2 || j!==n-1)){
                    lines+=" "
                }
                else {
                    lines+='-'
                }
            }
            lines+="\n"
        }
    }

    console.log(lines)
}
printSqeares(7)
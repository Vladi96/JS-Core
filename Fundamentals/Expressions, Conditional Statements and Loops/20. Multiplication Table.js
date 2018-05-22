"use strict";
function multiTable(n) {
    let html='<table border="1">\n <tr><th>x</th>'
    let garbage=0
    for (let i = 1; i <= n; i++) {
        html+=`<th>${i}</th>`
    }
    html+='</tr>\n'
    for (let i = 1; i <=n; i++) {
        html+=`<tr><th>${i}</th>`
        let garbage=i
        for (let j = 1; j <=n; j++) {
            html+=`<td>${garbage}</td>`
            garbage+=i
        }
        garbage = i
        html+='</tr>\n'
    }
    html+="</table>"
    console.log(html)
}
multiTable(5)
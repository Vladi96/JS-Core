function table(input) {
    let html='<table>\n'
    for (let row of input) {
        let [name,position,salary] =Object.values(JSON.parse(row))
       html+='<tr>\n'
        html+=`<td>${name}</td>\n`
        html+=`<td>${position}</td>\n`
        html+=`<td>${salary}</td>\n`
       html+='<tr>\n'

    }
    html+='</table>'
    console.log(html)
}
table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])
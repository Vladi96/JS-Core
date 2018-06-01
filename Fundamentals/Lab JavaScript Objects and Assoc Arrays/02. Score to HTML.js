function html(input) {
    function htmlEscaping(text) {
        let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;','>':'&gt;'}
        return text.replace(/[\"&'<>]/g, ch => map[ch])
    }
    input = JSON.parse(input)
    let html = '<table>\n'
    html += '<tr><th>name</th><th>score</th></tr>\n'
    for (let el of input) {
        html += `<tr><td>${htmlEscaping(el.name)}</td><td>${el.score}</td></tr>\n`
    }
    html += '</table>'
    console.log(html)
}

html('[{"name":"Pesho & Kiro","score":0},{"name":"Gosho, Maria & Viki","score":205}]')
function findVariable(text) {
    let patern =/\b(_([a-z][0-9]*)+)\b/mgi
    let result=[],match
    for (let t of text.split(' ')) {
        while (match=patern.exec(t)){
            result.push(match[0])
        }
    }
    console.log(result.map(s=>s.substr(1)).toString())
}
findVariable('_perfectRectangle')
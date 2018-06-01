function towns(text) {
    let arr =[]
    text.shift()
    for (const tokens of text) {
        let town = tokens.toString().split('|').filter(e=>e!=='').map(e=>e.trim())
       let obj={
            "Town":town[0],
            "Latitude": Number(town[1]),
            "Longitude":Number(town[2])
        }
        arr.push(obj)
    }
    console.log(JSON.stringify(arr))
}
towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])
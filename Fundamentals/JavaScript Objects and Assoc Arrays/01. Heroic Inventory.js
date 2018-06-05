function heroic(input) {
    let array = []
    for (let row of input) {
        let map = {}
        let [name, level, arr] = row.split('/').map(e => e.trim()).filter(e=>e!=='')
        map["name"] = name
        map["level"] = Number(level)
        if (arr !== undefined) {
            map['items'] = arr.split(', ')
        } else {
            map['items']=[]
        }
        array.push(map)
    }
    console.log(JSON.stringify(array))
}

heroic(['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])
function auto(input) {
    let map = new Map()

    for (let row of input) {
        let [mark,model,serial]=row.split(' | ')
        if (!map.has(mark)) {
           map.set(mark,new Map())
        }
        let old = map.get(mark).get(model)
        if (old!==undefined) {
            map.get(mark).set(model,Number(serial)+old)
        }else {
            map.get(mark).set(model,Number(serial))
        }
    }
    for (let [k,v] of map) {
        console.log(k)
        for (let [mod,ser] of v) {
            console.log(`###${mod} -> ${ser}`)
        }
    }
}

auto([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Audi | Q7 | 1000',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])
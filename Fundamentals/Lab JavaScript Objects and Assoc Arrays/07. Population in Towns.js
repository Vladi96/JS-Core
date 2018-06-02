function populationTowns(input) {
    let obj = {}
    for (let el of input) {
        el = el.split('<->').map(e => e.trim()).filter(e => e !== '')
        if (!obj.hasOwnProperty(el[0])) {
            obj[el[0]] = 0
        }
        obj[el[0]] += Number(el[1])
    }
    for (let el in obj) {
        console.log(`${el} : ${obj[el]}`)
    }
}

populationTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])
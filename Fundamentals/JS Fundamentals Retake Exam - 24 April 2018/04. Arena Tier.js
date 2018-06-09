function area(input) {
    let result = {}
    for (let row of input) {
        if (row.includes(' -> ')) {
            let [hero, type, power] = row.split(' -> ')
            if (!result.hasOwnProperty(hero)) {
                result[hero] = {}
                result[hero][type] = Number(power)
                result[hero]['__total__'] = Number(power)
            }
            else {
                if (!result[hero].hasOwnProperty(type)) {
                    result[hero][type] = Number(power)
                    result[hero]['__total__'] += Number(power)
                }
                else {
                    if (result[hero][type] < power) {
                        result[hero]['__total__'] -= result[hero][type]
                        result[hero]['__total__'] += Number(power)
                        result[hero][type] = power
                    }
                }

            }
        }
        else if (row.includes(' vs ')) {
            //TODO duel
            let [gladiator1, gladiator2] = row.split(' vs ')
            if (result.hasOwnProperty(gladiator1) && result.hasOwnProperty(gladiator2)){
                for (let g1Item of result[gladiator1]) {
                    let g1Score = result[gladiator1][g1Item]
                    let g2Score = result[gladiator2][g1Item]
                    if(g1Score && g2Score && g2Score!=='__total__'){
                        if (g1Score>g2Score) {
                            delete result[gladiator2]
                            break
                        }
                        else {
                            delete result[gladiator1]
                            break
                        }
                    }
                }
            }
        }
        else {
            //TODO sort
            let sortedGladiators = Object.keys(result).sort((g1, g2) => {
                let diffScore = result[g2]['__total__'] - result[g1]['__total__']
                if (diffScore === 0) {
                    return g1.localeCompare(g2)
                }
                return diffScore
            })
            for (let k of sortedGladiators) {
                console.log(`${k}: ${result[k]['__total__']} skill`)

                let sortedItems = Object.keys(result[k]).filter(e => e !== '__total__').sort((i1, i2) => {
                    let differendScore = result[k][i2] - result[k][i1]
                    if (differendScore === 0) {
                        return i1.localeCompare(i2)
                    }
                    return differendScore
                })
                for (let item of sortedItems) {
                    console.log(`- ${item} <!> ${result[k][item]}`)

                }
            }
        }
    }
}

area(['Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'])

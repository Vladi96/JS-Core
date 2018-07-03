function makeCard(a, q) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let suite = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }
    if (!faces.includes(a)) {
        throw Error('Error')
    }
    if (!suite[q]) {
        throw Error('Error')
    }

    toString = function () {
        return `${a}${suite[q]}`
    }
}

console.log(''+makeCard('2', 'S'));
module.exports = makeCard()
function deckCards(array) {
    function makeCard(face, suece) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let suite = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }
        if (!faces.includes(face)) {
            throw Error('Error')
        }
        if (!suite[suece]) {
            throw Error('Error')
        }
        return `${faces.filter(e=>e===face)}${suite[suece]}`
    }

    let result = []
    for (let el of array) {
        let fc = el.substr(0, el.length - 1)
        let sq = el.substr(el.length - 1, 1)
        try {
            result.push(makeCard(fc, sq))
        } catch (ex) {
            console.log(`Invalid card: ${el}`);
            return
        }
    }
    console.log(result.join(' '));
}

deckCards(['5S', '3D', 'QD', '1C']);
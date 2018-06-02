function lowerstPrice(input) {
    let print = new Map()
    for (let row of input) {
        let [town, product, sales] = row.split(' | ').map(e => e.trim()).filter(e => e !== '')
        //Verify Product key
        if (!print.has(product)) {
            print.set(product, new Map())
        }
        print.get(product).set(town, Number(sales))
    }
    for (let [product, inMap] of print) {
        let lowestPrice = Infinity;
        let townLowestPrice = "";
        for (let [town, price] of inMap) {
            if (price < lowestPrice) {
                lowestPrice = price;
                townLowestPrice = town;
            }
        }
        console.log(`${product} -> ${lowestPrice} (${townLowestPrice})`)
    }
}

lowerstPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])
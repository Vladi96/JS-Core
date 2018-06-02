function city(input) {
    let bigMap = new Map()
    for (let row of input) {
        let [town, product, quelity] = row.split('->').map(e => e.trim()).filter(e => e !== '')
            //Verify Towns
        if (!bigMap.has(town)) {
            bigMap.set(town, new Map())
        }
        //Verify products
        if(!bigMap.get(town).has(product)){
            bigMap.get(town).set(product,0)
        }
        let sum = quelity.split(' : ').reduce((a, b) => a * b)
        let oldSum = bigMap.get(town).get(product)
        bigMap.get(town).set(product,oldSum+sum)
    }

    for (let [town,product] of bigMap) {
        console.log(`Town - ${town}`)
        for (let [produc,sales] of product) {
            console.log(`$$$${produc} : ${sales}`)
        }
    }
}

city(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3',
    'Montana -> Chereshas -> 10 : 2'])
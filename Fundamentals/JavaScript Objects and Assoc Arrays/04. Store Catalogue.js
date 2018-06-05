function storeCataloge(products) {
    let catalogue = new Map();

    for (let line of products) {
        let [product, price] = line.split(" : ");
        let startChar = product.substring(0, 1).toUpperCase();
        if (!product.startsWith(startChar)) {
            continue;
        }
        catalogue.set(product, Number(price));
    }
    catalogue = new Map([...catalogue.entries()].sort());

    let letter = "";
    for (let [product, price] of catalogue) {
        if (product[0] != letter) {
            console.log(`${product[0]}`);
        }
        console.log(`  ${product}: ${price}`);

        letter = product[0];
    }
}

storeCataloge(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])
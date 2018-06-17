function tracel(input) {
    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let obj = {}
    for (let row of input) {
        let [country, city, cost] = row.split(' > ')
        city=cap(city)
        if (!obj.hasOwnProperty(country)) {
            obj[country] = {}
            obj[country][city] = Number(cost)
        }
        else {
            if (!obj[country].hasOwnProperty(city)) {
                obj[country][city] = Number(cost)
            }
            else {
                if (obj[country][city] > cost) {
                    obj[country][city] = Number(cost)
                }
            }
        }
    }
    let sortedCountry = Object.keys(obj).sort((a1, a2) => {
        return a1.localeCompare(a2)
    })

    for (let k of sortedCountry) {
        let result = ''
        let sortedItems = Object.keys(obj[k]).sort((i1, i2) => {
            let differendScore = obj[k][i1] - obj[k][i2]
            if (differendScore === 0) {
                return i2.localeCompare(i1)
            }
            return differendScore
        })
        result += k + ' -> '
        for (let item of sortedItems) {
            result += `${item} -> ${obj[k][item]} `
        }
        console.log(result.trim())
    }

}

tracel(["Bulgaria > Sofia > 500",
    "Bulgaria > sopot > 800",
    "France > paris > 2000",
    "aa > tirana > 1000",
    "aa > tiranas > 10",
    "Bulgaria > Sofia > 200"]
)
function sortedTicked(arr, type) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    let result = []
    for (let el of arr) {
        let [destination, price, status] = el.split('|')
        result.push(new Ticket(destination, price, status))
    }
   return result.sort((a, b) => a[type] > b[type])
}

console.log(sortedTicked(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));
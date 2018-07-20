class Sorted {
    constructor() {
        this.element = []
        this.size = 0
    }

    add(number) {
        this.element.push(number)
        this.element.sort((a, b) => a - b)
        this.size++
    }

    remove(number) {
        if (number >= 0 && number < this.element.length)
        this.element.splice(number, 1)
        this.size--
    }

    get(number) {
        if (number >= 0 && number< this.element.length) {
            return this.element[number]
        }
    }
}

let a = new Storted()
a.add(5)
a.add(9)
a.add(7)
console.log(a)
console.log(a.get(2));
console.log(a.size);

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }
    set diameter(i){
        return this.radius = i/2
    }
    get area() {
        return Math.PI * this.radius ** 2
    }
}

let c = new Circle(2)
console.log(c.diameter)
console.log(c.area)
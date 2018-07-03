class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color
    }

     calcArea() {
        return this.width * this.height
    }
}

let c1 = new Rectangle(4, 5, 'red')
console.log(c1)
console.log(c1.calcArea)


class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString
        this.innerLength = innerLength
    }

    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString
        }
        return this.innerString.substring(0, this.innerLength) + '...'
    }

    get innerLength() {
        return this._innerLength
    }

    set innerLength(num) {
        if (num < 0) {
            this._innerLength = 0
        }
        else {
            this._innerLength = num
        }
    }

    increase(number) {
        this.innerLength += number
    }

    decrease(number) {
        this.innerLength -= number
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test

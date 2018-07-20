class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide === undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}

let expect = require('chai').expect
describe('test', () => {
    let result
    beforeEach(() => {
        result = new Calculator()
    })
    it('should', () => {
        result.add(10)
        result.add('Pesho')
        result.add('5')
        expect(result.toString()).equals('10 -> Pesho -> 5')
    });
    it('should', () => {
        result.add([5, 6, 'pesho'])
        result.add('Pesho')
        result.add('5')
        expect(result.toString()).equals("5,6,pesho -> Pesho -> 5")
    });
    it('should ', function () {
        result.add('pesho')
        result.add('gosho')
        result.add('5')
        expect(result.toString()).equals('pesho -> gosho -> 5')
    });
    it('should ', function () {
        result.add('pesho')
        result.add('gosho')
        result.add('5')
        expect(result.orderBy()).equals('5, gosho, pesho')
    });
    it('should ', function () {
        result.add('10')
        result.add('-5')
        result.add(0)
        expect(result.orderBy()).equals('-5, 0, 10')
    });

    it('should ', function () {
        result.add('10')
        result.add('-5')
        result.add(0)
        expect(result.divideNums()).equals(0)
    });
    it('should ', function () {
        result.add(-5)
        result.add('15')
        result.add(0)
        expect(result.divideNums()).equals('Cannot divide by zero')
    });
    it('should ', function () {
        result.add()
        expect(result.divideNums()).to.throw("Error: There are no numbers in the array!")
    });
})
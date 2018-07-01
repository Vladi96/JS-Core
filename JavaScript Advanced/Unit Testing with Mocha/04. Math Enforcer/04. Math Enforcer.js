let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
let expect = require('chai').expect
describe('Testing 4th Problem', () => {
    let calculator;
    beforeEach(() => {
        calculator = mathEnforcer
    })
    it('should return undefined', () => {
        expect(calculator.sum()).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(calculator.subtractTen()).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(calculator.sum('nope' || [] || {}, 5)).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(calculator.sum('-2.1', -1.1)).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(calculator.sum(6, 'nope' || [] || {},)).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(calculator.addFive('aa'||{}||[])).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(calculator.addFive('5.1')).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(calculator.subtractTen([]||{}||'aa')).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(calculator.subtractTen('5')).to.equals(undefined)
    });
    it('should return 10', () => {
        expect(calculator.addFive(5)).to.equals(10)
    });
    it('should return -5', () => {
        expect(calculator.addFive(-10)).to.equals(-5)
    });
    it('should return 5', () => {
        expect(calculator.sum(2, 3)).to.equals(5)
    });
    it('should return 5', () => {
        expect(calculator.subtractTen(15)).to.equals(5)
    });
    it('should return 15.5', () => {
        expect(calculator.subtractTen(5.5)).to.closeTo(-4.5,0.0001)
    });
    it('should return -15.5', () => {
        expect(calculator.subtractTen(-5.5)).to.closeTo(-15.5,0.0001)
    });
    it('should return 3.2', () => {
        expect(calculator.sum(2.1, 1.1)).to.closeTo(3.2, 0.0001)
    });
    it('should return -3.3', () => {
        expect(calculator.sum(-2.1, -1.2)).to.closeTo(-3.3, 0.0001)
    });
    it('should return 10.1', () => {
        expect(calculator.addFive(5.1)).to.closeTo(10.1, 0.0001)
    });
    it('should return -5.1', () => {
        expect(calculator.addFive(-10.5)).to.closeTo(-5.5, 0.0001)
    });
})
function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}
let expect = require('chai').expect

describe("nope",()=>{
    let calc;
    beforeEach(() => {
        calc = createCalculator()
    })
    it('should return Object ', function () {
        expect(typeof calc).to.equals('object')
    });
    it('should return 5 of func Add',()=> {
        calc.add(5)
        expect(calc.get()).to.equals(5)
    });
    it('should return 0 of func get',()=> {
        expect(calc.get()).to.equals(0)
    });
    it('should return 3.3 of 1.1,1.1,1.1',()=> {
        calc.add(1.1)
        calc.add(1.1)
        calc.add(1.1)
        expect(calc.get()).to.closeTo(3.3,0.001)
    });
    it('should return 5 of "5"',()=> {
        calc.add('5')
        expect(calc.get()).to.equals(5)
    });
    it('should return -5 of -5,5,-5',()=> {
        calc.add(-5)
        calc.add(5)
        calc.add(-5)
        expect(calc.get()).to.equals(-5)
    });
    it('should return 5 of 5,10,10',()=> {
        calc.add('5')
        calc.add('10')
        calc.subtract(10)
        expect(calc.get()).to.equals(5)
    });

})
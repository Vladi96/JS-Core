function sum(arr) {
    let sum =0
    for (let el of arr) {
        sum+=Number(el)
    }
    return sum
}
let expect = require('chai').expect;
describe("Test summator",()=>{
    it("Should return 3 of [1,2]",()=>{
        expect(sum([1,2])).to.equal(3)
    })
    it("Should return 0 of []",()=>{
        expect(sum([])).to.equal(0)
    })
    it("Should return 3 of ['2',1]",()=>{
        expect(sum(['2',1])).to.equal(3)
    })
    it("Should return 3.3 of [1.1,1.1,1.1]",()=>{
        expect(sum([1.1,1.1,1.1])).to.closeTo(3.3,0.0001)
    })
    it('Should return NaN of ["pesho"]', function () {
        expect(sum(['pesho'])).to.be.NaN
    });
    it('Should return NaN of [[]]', function () {
        expect(sum([[]])).to.equals(0)
    });
    it('Should return 2 of [-2,-2,6]', function () {
        expect(sum([-2,-2,6])).to.equals(2)
    });
})
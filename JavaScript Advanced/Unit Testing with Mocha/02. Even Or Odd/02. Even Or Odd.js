function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
let expect =require('chai').expect
describe("Checking is even or odd number",()=>{
    it('should return undefined',  ()=> {
        expect(isOddOrEven([])).to.equals(undefined)
    });
    it('should return undefined',  ()=> {
        expect(isOddOrEven({})).to.equals(undefined)
    });
    it('should return undefined',  ()=> {
        expect(isOddOrEven(56)).to.equals(undefined)
    });
    it('should return even',  ()=> {
        expect(isOddOrEven('haha')).to.equals('even')
    });
    it('should return odd',  ()=> {
        expect(isOddOrEven('hah')).to.equals('odd')
    });
})
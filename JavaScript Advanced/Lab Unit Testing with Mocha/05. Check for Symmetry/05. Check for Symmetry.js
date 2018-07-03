function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}
let expect =require('chai').expect
describe('Test Problem 5',()=>{
    it('should return true of [1,2,3,2,1]', ()=>{
        expect(isSymmetric([1,2,3,2,1])).to.true
    });
    it('should return false of ["1",2,3,2,1]', ()=>{
        expect(isSymmetric(['1',2,3,2,1])).to.false
    });
    it('should return true of [1]', ()=>{
        expect(isSymmetric([1])).to.true
    })
    it('should return false of [1,2]', ()=>{
        expect(isSymmetric([1,2])).to.false
    })
    it('should return true of [{s:5},[2],"a",[2],{s:5}]', ()=>{
        expect(isSymmetric([{s:5},[2],"a",[2],{s:5}])).to.true
    })
    it('should return true of []', ()=>{
        expect(isSymmetric([])).to.true
    })
    it('should return false for not array', ()=>{
        expect(isSymmetric({})).to.false
    })
})
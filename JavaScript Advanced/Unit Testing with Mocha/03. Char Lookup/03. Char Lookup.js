function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

let expect = require('chai').expect
describe('Testing Problem 3 char lookup', () => {
    it('should return char at index', () => {
        expect(lookupChar('vladi', 2)).to.equals('a')
    });
    it('should return undefined', () => {
        expect(lookupChar([], 5)).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(lookupChar({}, 5)).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(lookupChar(5, 5)).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(lookupChar('sa', 'qe')).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(lookupChar('dad', 5.5)).to.equals(undefined)
    });
    it('should return incorrect index', () => {
        expect(lookupChar("noop", -5)).to.equals('Incorrect index')
    });
    it('should return incorrect index', () => {
        expect(lookupChar("noop", 55)).to.equals('Incorrect index')
    });
    it('should return undefined', () => {
        expect(lookupChar('dad', {})).to.equals(undefined)
    });
    it('should return undefined', () => {
        expect(lookupChar('dad', [55,5])).to.equals(undefined)
    });
})
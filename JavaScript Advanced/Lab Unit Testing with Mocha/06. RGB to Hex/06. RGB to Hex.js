function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let expect = require('chai').expect
describe('testing RGB to Hex', () => {
    it('should return #000000 from 0,0,0', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equals('#000000')
    });
    it('should return #FFFFFF from 255,255,255', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equals('#FFFFFF')
    });
    it('should return undefined from -1,255,255', () => {
        expect(rgbToHexColor(-1, 255, 255)).to.equals(undefined)
    });
    it('should return undefined from 0,-1,255', () => {
        expect(rgbToHexColor(1, -255, 255)).to.equals(undefined)
    });
    it('should return undefined from 0,1,255', () => {
        expect(rgbToHexColor(1, 255, -255)).to.equals(undefined)
    });
    it('should return undefined from 256,1,255',()=>{
        expect(rgbToHexColor(256,255,255)).to.equals(undefined)
    });
    it('should return undefined from 255,555,255',()=>{
        expect(rgbToHexColor(255,555,255)).to.equals(undefined)
    });
    it('should return undefined from 25,1,256',()=>{
        expect(rgbToHexColor(25,1,256)).to.equals(undefined)
    });
})
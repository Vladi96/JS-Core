function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}
let expect = require('chai').expect
describe('some test hope its work...',()=>{
    let list
    describe('working whit add Function',()=>{
        beforeEach(()=>{
            list = createList()
        })
        it('should work',()=>{
            list.add('pesho')
            list.add([5, 2])
            list.add({5:1})
            expect(list.toString()).to.equals('pesho, [5, 2], {5:1}')
        });
        it('should work',()=>{
            list.add('pesho')
            list.add([5, 2])
            list.add({5:1})
            expect(list).to.equals('pesho, [5, 2], {5:1}')
        });
        it('should ',()=>{
            list.add(5)
            list.add(-1)
            expect(list.toString()).to.equals('5, -1')
        });
        it('should work whit numbers',()=>{
            list.add(5.5)
            list.add(-1.0)
            expect(list.toString()).to.equals('5.5, -1')
        })
        it('to be empty string',()=>{
            expect(list.toString()).to.equals('')
        })
        it('to work whit positive and negative numbers',()=>{
            list.add(-2)
            list.add(10)
            expect(list.toString()).to.equals('-2, 10')
        })
        it('to be arry',()=>{
            expect(list.toString()).to.equals('')
        })
    })

    describe('working whit shiftLeft function',()=>{
        beforeEach(()=>{
            list = createList()
        })
        it('should work',()=>{
            list.add('pesho')
            list.add([5, 2])
            list.add({5:1})
            list.shiftLeft()
            expect(list).to.equals('[5, 2], {5:1}, pesho')
        });
        it('should return nothing', function () {
            expect(list.toString()).equals('')
        });
        it('should return 1', function () {
            list.add(1)
            list.shiftLeft()
            expect(list.toString()).equals('1')
        });
        it('should return 1', function () {
            list.add(1)
            list.add(5)
            list.shiftLeft()
            expect(list.toString()).equals('5, 1')
        });
        it('works whit 3th numbers',()=>{
            list.add(0)
            list.add(-2.6)
            list.add(5)
            list.shiftLeft()
            expect(list.toString()).to.equals('-2.6, 5, 0')
        })
        it('should work whit stings numbers', function () {
            list.add('pesho')
            list.add('gosho')
            list.shiftLeft()
            expect(list.toString()).to.equals('gosho, pesho')
        });
        it('should work whit stings numbers', function () {
            list.add('pesho')
            list.add('gosho')
            list.shiftLeft()
            list.shiftLeft()
            expect(list.toString()).to.equals('pesho, gosho')
        });
    })
    describe('working whit shiftRight function',()=>{
        beforeEach(()=>{
            list =createList()
        })
        it('should return 1', function () {
            list.add(1)
            list.add(5)
            list.shiftLeft()
            expect(list.toString()).equals('5, 1')
        });
        it('should work',()=>{
            list.add('pesho')
            list.add([5, 2])
            list.add({5:1})
            list.shiftRight()
            expect(list.toString()).to.equals('[object Object], pesho, 5,2')
        });
        it('should return 1', function () {
            list.add(1)
            list.shiftLeft()
            expect(list.toString()).equals('1')
        });
        it('should return nothing', function () {
            expect(list.toString()).equals('')
        });
        it('should work', function () {
            list.add(5)
            list.add('pesho')
            list.add('{gosho:5}')
            list.shiftRight()
            expect(list.toString()).equals('{gosho:5}, 5, pesho')
        });
        it('should work', function () {
            list.add(5)
            list.add('-2.55')
            list.add('{gosho:5}')
            list.shiftRight()
            expect(list.toString()).equals('{gosho:5}, 5, -2.55')
        });
    })
    describe('working whit swap',()=>{
        beforeEach(()=>{
            list=createList()
        })
        it('should return true', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap(0,1)).equals(true)
        });
        it('should return true', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap(0,3)).equals(true)
        });
        it('should return false', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap(-1,3)).equals(false)
        });
        it('should return false', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap(0,5)).equals(false)
        });
        it('should return false', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap(0,0)).equals(false)
        });
        it('should return false', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap('goshi',0)).equals(false)
        });
        it('should return false', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap(0,[5])).equals(false)
        });
        it('should return false', function () {
            list.add(1)
            list.add(2)
            list.add(3)
            list.add(4)
            expect(list.swap(1,{2:2})).equals(false)
        });
    })
})


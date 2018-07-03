let testArray = [1, 2, 3, 4, 5, 6]

(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }
    Array.prototype.take = function (n) {
        let result = []
        result = this.slice(0,n)
        return result;
    }
    Array.prototype.skip = function (n) {
        let result = []
        result = this.slice(n,this.length)
       return result
    }
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b)
    }
    Array.prototype.average = function () {
        return this.sum() / this.length
    }
})()

testArray.take(2)


function firsLastNumbers(arr) {
    let k = arr.shift()
    console.log(arr.slice(0,k))
    console.log(arr.slice(-k))
}
firsLastNumbers([2,7,8,9])
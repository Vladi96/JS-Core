function printEvryNElemtn(arr) {
        let n = Number(arr.pop())
    for (let i = 0; i < arr.length; i+=n) {
        console.log(arr[i])
    }
}
//printEvryNElemtn([5,20,31,4,20,2])
printEvryNElemtn(['a',  'asd', 'test', 'tset', 2])
function rotateArr(arr) {
    let n = arr.pop()
    let a
    for (let i = 0; i < n%arr.length; i++) {
        a = arr.pop()
        arr.unshift(a)
    }
    console.log(arr.toString().split(',').join(' '))
}
rotateArr(['1','2','3','4','2'])
rotateArr(['Banana','Orange','Coconut','Apple','15'])

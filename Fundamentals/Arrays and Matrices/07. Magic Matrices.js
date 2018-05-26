function magicMatrixx(arr) {
    let sumCol=0
    let sumRow=0
    for (let i = 0; i < arr.length; i++) {
        sumRow = arr[i].map(Number).reduce((a,b)=>a+b)
        for (let j = 0; j < arr[i].length; j++) {
            sumCol = arr[j].map(Number).reduce((a,b)=>a+b)
            if(sumRow !== sumCol){
                return console.log(false)
            }
        }
    }
    return console.log(true)
}

magicMatrixx(
    [['4', '5', '6'],
        ['6', '5', '4'],
        ['5', '5', '5']]
)
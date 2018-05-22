function calculateElements(input) {
    let sum =0
    let reversed =0
    for (let i = 0; i < input.length; i++) {
        sum +=input[i]
        reversed+=1/input[i]
    }
    console.log(sum)
    console.log(reversed)
    console.log(input.toString().split(',').join(''))
}

calculateElements([1,2,3,5])

function distance(numbers) {
    let x1 = numbers[0]
    let y1 = numbers[1]
    let z1 = numbers[2]
    let x2 = numbers[3]
    let y2 = numbers[4]
    let z2 = numbers[5]

    let result = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) +Math.pow(z1-z2,2))
    console.log(result)

}
distance([1, 1, 0, 5, 4, 0])
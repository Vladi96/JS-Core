function sumFirstAndLast(arr) {
    let sum =0
    sum +=Number(arr[0])
    sum+=Number(arr[arr.length-1])
    console.log(sum)
}
sumFirstAndLast(['20','10','40'])
function roundting([number, fixed]) {
    if (fixed > 15){
        fixed = 15
    }
    number = number.toFixed(fixed)
    console.log(Number(number))
}
roundting([10.5, 3])
function modifyNumber(number) {
    let lenght = number.toString().length
    let sum=0
    while (true){
        for (let i = 0; i < lenght; i++) {
            sum = sum + Number(number.toString()[i])
        }
        if(sum/lenght>5.0){
            return console.log(number)
        }
        else {
            number +='9'
            lenght++
            sum=0
        }
    }
}
modifyNumber(101)
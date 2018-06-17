function bitcoin(input) {
    let firstDay = 0
    let bit = 0
    let result = 0
    for (let i = 0; i < input.length; i++) {
        if((i+1)%3===0){
            result+=(Number(input[i])*67.51)-(Number(input[i])*67.51)*0.3
        }
        else {
            result+=Number(input[i])*67.51
        }
        if(result-11949.16>=0){
            if(firstDay===0){
                firstDay=i+1
            }
            bit+=Math.floor(result/11949.16)
            result%=11949.16
        }
    }
    if(bit!==0){
        console.log(`Bought bitcoins: ${bit}`)
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
        console.log(`Left money: ${result.toFixed(2)} lv.`)
    }
    else {
        console.log(`Bought bitcoins: ${bit}`)
        console.log(`Left money: ${result.toFixed(2)} lv.`)
    }
}

bitcoin([3124.15,
    504.212,
    2511.124])
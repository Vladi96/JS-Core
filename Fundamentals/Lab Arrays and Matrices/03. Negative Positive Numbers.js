function negativePositve(arr) {
    let result=[]
    for (let arg of arr) {
        if(arg<0){
            result.unshift(arg)
        }
        else {
            result.push(arg)
        }
    }
    console.log(result)
}
negativePositve([7, -2, 8, 9])
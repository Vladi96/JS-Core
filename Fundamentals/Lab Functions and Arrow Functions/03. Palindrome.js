function palindrom(input) {
    let f = s => s.split("").reverse().join("")
    if(f(input) === input){
        console.log('true')
    }
    else {
        console.log('false')
    }
}

palindrom('haha')
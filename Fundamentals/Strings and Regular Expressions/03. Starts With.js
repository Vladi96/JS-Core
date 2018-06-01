function starsWith(text,start) {
    let a = text.substring(0,start.length)
    if (a===start){
        console.log(true)
    }
    else {
        console.log(false)
    }
}
starsWith('Marketing Fundamentals, starting 19/10/2016',
    'Marketing Fundamentals, sta')
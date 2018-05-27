function extraTest(text) {
    let indexStart = 0
    let  indexEnd = 0
    let result =[]
    indexStart = text.indexOf('(',indexEnd)
    indexEnd = text.indexOf(')',indexStart)
    while (indexStart!==-1 && indexEnd!==-1){
        result.push(text.substring(indexStart+=1, indexEnd))
        indexStart = text.indexOf('(',indexEnd)
        indexEnd = text.indexOf(')',indexStart)
    }
    console.log(result.join(', '))
}
extraTest(') ) start) ( end (start)')
function machWords(text) {
    let result =[]
    let regex = new RegExp('\\w+','gi')
    result.push(text.match(regex).join('|'))
    console.log(result.toString())
}
machWords('_(Underscores) are also word characters')
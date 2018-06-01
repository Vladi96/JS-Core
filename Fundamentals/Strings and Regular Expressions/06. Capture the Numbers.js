function captureNumbers(text) {
    let pattern = /\d+/mg
    let result =[],match
    for (let m of text) {
        while(match=pattern.exec(m)){
            result.push(match[0])
        }
    }
    console.log(result.toString().split(',').join(' '))
}
captureNumbers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'])
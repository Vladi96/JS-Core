function upperCase(input) {
    input= input.toUpperCase().split(/\W+/).filter(s=>s!=='').join(', ')
    console.log(input)
}
upperCase('Hi, how are you?')

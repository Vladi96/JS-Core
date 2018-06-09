function ancient(input) {
    input=input.join(' ').split(' ')
    for (let i = 0; i < input.length; i++) {
        if(input[i]==='32656' && input[i+1]==='19759' && input[i+2]==='32763'){
            let lengt = Number(input[i+4])
            let word
            word = input.slice(i+6,lengt+i+6)
            console.log(word.map(e=>String.fromCharCode(e)).join(''))
            i=i+6
        }
    }
}
ancient(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 5 0 71 111 115 104 111','0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0 75 105 114 111 0 0 0 0 0', '0 0 0 0 0 32656 19759 32763 0 8 0 86 101 114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'])
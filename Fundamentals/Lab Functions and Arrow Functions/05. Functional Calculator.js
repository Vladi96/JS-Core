function calculator(a,b,operator) {
    switch (operator) {
        case '+':
            console.log(a+b)
            break
        case '-':
            console.log(a-b)
            break
        case '*':
            console.log(a*b)
            break
        case '/':
            console.log(a/b)
            break
    }
}
calculator(2,4,'+')
function printArry(arr) {
    let lastElement = arr.pop()
    console.log(arr.join(lastElement))
}
printArry(['One','Two','Three','Four','Five','-'])
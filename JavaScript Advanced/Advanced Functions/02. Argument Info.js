function result() {
    let obj = {}, arr = []

    function check(input) {
        console.log(`${typeof (input)}: ${input}`)
        if (!obj.hasOwnProperty(typeof input)) {
            obj[typeof input] = 0
        }
        obj[typeof input] += 1
    }

    for (let i = 0; i < arguments.length; i++) {
        let value = arguments[i]
        check(value)
    }

    for (let el in obj) {
        arr.push([el, obj[el]])
    }
    arr.sort((a, b) => {
        return b[1] - a[1]
    })
    for (let el of arr) {
        console.log(`${el[0]} = ${el[1]}`)
    }
}

result({name: 'bob'}, 3.333, 9.999);

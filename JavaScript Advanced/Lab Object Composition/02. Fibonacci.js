function result() {
    let f1 = 0;
    let f2 = 1;
    return function () {
        let f3 = f1 + f2;
        [f1, f2] = [f2, f3];
        console.log(f1)
    }
}
let fib = result()
fib()
fib()
fib()
fib()
fib()
fib()
fib()
fib()

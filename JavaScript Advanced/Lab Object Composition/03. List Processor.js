function solve(array) {
    let closer = (function () {
        let myList = []

        function add(myString) {
            myList.push(myString)
        }

        function print() {
            console.log(myList.toString())
        }
        function remove(string) {
            myList = myList.filter(e=>e!==string)
        }
        return {
            add,
            print,
            remove,
        }
    })()

    for (let arr of array) {
        let [fun, str] = arr.split(' ')
        switch (fun) {
            case 'add':
                closer.add(str)
                break;
            case 'print':
                closer.print()
                break
            case 'remove':
                closer.remove(str)
                break;
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
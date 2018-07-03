function createCar(array) {
    let fatherCar = (function () {
        let myObj = {}

        function create(name, prop, value) {
            if (prop) myObj[name] = Object.create(myObj[value])
            else myObj[name] = {}
        }

        function set(name, prop, value) {
            myObj[name][prop] = value
        }

        function print(name) {
            let curent = myObj[name]
            let props = []
            for (let el in curent) {
                props.push(`${el}:${curent[el]}`)
            }
            console.log(props.join(', '))
        }

        return {
            create,
            set,
            print
        }
    })()

    for (let el of array) {
        let [funck, newCar, secondFunck, parent] = el.split(' ')
        switch (funck) {
            case'set':
                fatherCar.set(newCar, secondFunck, parent)
                break
            case 'create':
                fatherCar.create(newCar, secondFunck, parent)
                break
            case 'print':
                fatherCar.print(newCar)
                break
        }
    }
}

createCar(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new','create c5 inherit c2', 'set c5 type avant', 'set c5 model RS6','print c5'])
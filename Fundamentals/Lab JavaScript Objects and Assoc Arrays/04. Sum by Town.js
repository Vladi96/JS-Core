function sumTown(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = 0
        }
        obj[arr[i]] += Number(arr[i += 1])
    }
    console.log(JSON.stringify(obj))
}

sumTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])
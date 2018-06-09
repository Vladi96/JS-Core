function inventory(arr) {
    let result = arr.shift().split(' ')

    let edit = {
        'Buy': function (item) {
            if (!result.includes(item)) {
                result.push(item)
            }
        },
        'Trash': function (item) {
            let index = result.indexOf(item)
            if (index > -1) {
                result.splice(index, 1)
            }
        },
        'Repair': function (item) {
            let index = result.indexOf(item)
            if (index > -1) {
                let it = result.splice(index, 1)
                result.push(it[0])
            }
        },
        'Upgrade': function (item) {
            let [serch,res]=item.split('-')
            let index = result.indexOf(serch)
            if (index > -1) {
                result.splice(index+1,0,serch+':'+res)
            }
        },
        'Fight!': function (item) {
            console.log(result.toString().split(',').join(' '))
            return
        }

    }

    for (let row of arr) {
        let [comand, item] = row.split(' ')
        edit[comand](item)
    }
}

inventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!'
])
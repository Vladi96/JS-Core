function juice(input) {
  let result = {},obj={}
    for (let row of input) {
        let [name,quantity]=row.split(' => ')
        if(!obj.hasOwnProperty(name)){
            obj[name]=0
        }
        obj[name]+=Number(quantity)
        if(obj[name]>=1000){
            if(!result.hasOwnProperty(name)){
                result[name]=0
            }
            result[name]+=Math.floor(obj[name]/1000)
            obj[name]%=1000
        }
    }
    for (let row in result) {
        console.log(`${row} => ${result[row]}`)
    }
}

juice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])
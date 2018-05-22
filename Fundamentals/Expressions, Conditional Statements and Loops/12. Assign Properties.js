"use strict";
function objects([key1,value1,key2,value2,key3,value3]) {
    let obj={}
    obj[key1] = value1
    obj[key2] = value2
    obj[key3] = value3
    console.log(obj)
}
objects(['name', 'Pesho', 'age', '23', 'gender', 'male'])
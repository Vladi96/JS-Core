function addRemove(arr) {
    let result =[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==='add'){
            result.push(i+1)
        }
        else{
            result.pop()
        }
    }
    if(result.length===0){
        return console.log('Empty')
    }
    console.log(result.toString().split(',').join('\n'))
}
addRemove(['add','add','remove','add','add'])
//addRemove(['add','add','add','remove','add'])
//addRemove(['remove',"remove",'remove'])
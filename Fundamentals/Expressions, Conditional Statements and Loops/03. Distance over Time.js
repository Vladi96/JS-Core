function caclulate(value) {
    let v1 = value[0]
    let v2 = value[1]
    let hour = value[2]/60/60
    v1*=hour
    v2*=hour
    console.log(Math.abs(v1-v2)*1000)
}
caclulate([11,10,120])
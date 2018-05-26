function extractFromArray(arr) {
    console.log(Number(arr.slice(0,1)))
    let f = arr.toString().split(',').filter((x,i)=>x>=arr[i-1]).join('\n')
    console.log(f)
}
extractFromArray([])
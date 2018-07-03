function subsum(arr, start, end) {
    if(!Array.isArray(arr)){
        return NaN
    }
    if(start<0){
        start=0
    }
    if(end>arr.length-1){
        end=arr.length-1
    }
    let result=0
    for (let i = start; i <= end; i++) {
        result+=Number(arr[i])
    }
   return result
}

subsum([10, 20, 30, 40, 50, 60], 3, 300)
subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
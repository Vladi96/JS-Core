function evenPosition(arr) {
   arr=arr.toString().split(',').filter((e,i)=>i%2==0).join(' ')
    console.log(arr)
}
evenPosition(['10','20','30'])
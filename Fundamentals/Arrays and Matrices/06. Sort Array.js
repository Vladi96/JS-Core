function sort(arr) {
  arr.sort().sort((a,b)=>a.length-b.length).join()
    console.log(arr.toString().split(',').join('\n'))
}
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])


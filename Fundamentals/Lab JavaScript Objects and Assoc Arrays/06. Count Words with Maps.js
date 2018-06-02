function coutWordWithMap(text) {
    let map = new Map(), pattern = /\W+/mg
    text = text.toString().split(pattern).map(e=>e.trim().toLowerCase()).filter(e=>e!=='')
    for (let i = 0; i < text.length; i++) {
        if(!map.has(text[i])){
            map.set(text[i],0)
        }
        map.set(text[i],map.get(text[i])+1)
    }

    for (let [key,value] of [...map].sort()) {
        console.log(`'${key}' -> ${value} times`)
    }
}
coutWordWithMap(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --'])
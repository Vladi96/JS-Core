function countWords(text) {
    let pattern = /\W/mg
    text = text.toString().split(pattern).map(e => e.trim()).filter(e => e !== '').join(' ')
    let obj = {}
    for (let i = 0; i <text.split(' ').length; i++) {
        if(!obj.hasOwnProperty(text.split(' ')[i])){
            obj[text.split(' ')[i]]=0
        }
        obj[text.split(' ')[i]]+=1
    }
    console.log(JSON.stringify(obj))
}

countWords(['JS devs use Node.js for server-side JS.-- JS for devs'])
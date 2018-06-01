function endWith(text,sub) {
    let a =text.substr(-sub.length,sub.length)
    if(a===sub){
        console.log(true)
    }
    else {
        console.log(false)
    }
}
endWith('The new iPhone has no headphones jack.',
    'o headphones jack.')
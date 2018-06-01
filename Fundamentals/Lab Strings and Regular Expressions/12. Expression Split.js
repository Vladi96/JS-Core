function split(text) {
    let regex = /\'+|,+|;+|\.+|\\+|\(+|\)+/gm
    console.log(text.split(regex).join(' ').split(' ').filter(s=>s!=='').join('\n'));
}
split('let sum = 1 + 2;if(sum > 2){\\tconsole.log(sum);}')
function usernames(mail) {
    let result = ''
    let full = []
    for (let i = 0; i < mail.length; i++) {
         result = mail[i].slice(0, mail[i].indexOf('@'))
         result += '.' + mail[i][mail[i].indexOf('@') + 1]
        while (mail[i].split('.').length-1){
            result += (mail[i][mail[i].indexOf('.') + 1])
            mail[i] = mail[i].substring(mail[i].indexOf('.')+1,mail[i].length-1)
        }
        full.push(result)
    }
    console.log(full.toString().split(',').join(', '))
}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])
function emailValidation(mail) {
    let regex = /^(\w|\d)+@[a-z]+\.[a-z]+$/mg;
    if(regex.test(mail)){
        console.log('Valid')
    }
    else{
        console.log('Invalid')
    }
}
emailValidation('valid@email.bg')
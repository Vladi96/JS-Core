$(() => {
    let btnLoad = $('#btnLoad')
    btnLoad.click(showPhonebook)
    let listPhonebook = $('#phonebook')
    $('#btnCreate').click(createNewContact)
    let currentName = $('#person')
    let currentPhone = $('#phone')

    function createNewContact() {
        let req = {
            url: 'https://phonebook-eff04.firebaseio.com/phonebook.json',
            method: 'POST',
            data: JSON.stringify({
                name: currentName.val(),
                phone: currentPhone.val()
            })
        }
        $.ajax(req)
    }

    function showPhonebook() {
        listPhonebook.empty()
        let req = {
            url: 'https://phonebook-eff04.firebaseio.com/phonebook.json',
            method: 'GET',
            success: display
        }
        $.ajax(req)
    }

    function display(data) {
        for (let el in data) {
            listPhonebook.append($('<li>').text(`${data[el].name}: ${data[el].phone}`))
        }
    }
})

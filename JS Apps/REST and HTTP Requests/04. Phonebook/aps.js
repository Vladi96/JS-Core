$(function attachEvents() {
    $('#btnLoad').click(loadConstacts)
    let phonebookList = $('#phonebook')

    function loadConstacts() {
        let req = {
           url:'https://phonebook-nakov.firebaseio.com/phonebook.json',
            method: 'GET',
            success: load
        }
        $.ajax(req)
    }

    function load(data) {
        phonebookList.empty()
        for (let key in data) {
            let li=$(`<li>${data[key].person}: ${data[key].phone}</li>`);
            li.append($('<button>[Delete]</button>').click(()=> deleteKey(key)))
            phonebookList.append(li)
        }
    }
    function deleteKey(key){
        let req ={
            url:`https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`,
            method:'DELETE',
            success:loadConstacts
        }
        $.ajax(req)
    }

    $('#btnCreate').click(toCreate)

    function toCreate() {
        let req = {
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            method: 'POST',
            data: JSON.stringify({
                person: $('#person').val(),
                phone: $('#phone').val()
            }),
            success: () => {
                $('#person').val('')
                $('#phone').val('')
                loadConstacts()
            }
        }
        $.ajax(req)
    }
})
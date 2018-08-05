function attachEvents() {
    let textAria = $('#messages')
    loadMesseges()
    function loadMesseges() {
        let req = {
            url: 'https://messenger-f1d1e.firebaseio.com/messenger.json',
            method: 'GET',
            success: loadAllMesengers
        }
        $.ajax(req)
    }
    function loadAllMesengers(data) {
        let arr = []
        for (let m in data) {
            arr.push([data[m].timestamp, `${data[m].author}: ${data[m].content}\n`])
        }
        arr.sort((a, b) => {
            return a[0] - b[0]
        })
        arr.forEach(el=>el.shift())
        textAria.text(`${arr.join('')}`)
    }
    $('#submit').click(submitMessage)
    let name = $('#author')
    let content = $('#content')

    function submitMessage() {
        let req = {
            url: 'https://messenger-f1d1e.firebaseio.com/messenger.json',
            method: 'POST',
            data: JSON.stringify({
                author: name.val(),
                content: content.val(),
                timestamp: Date.now()
            }),
            success: loadMesseges,
            error: () => {
                alert("Didn't send this message!")
            }
        }
        $.ajax(req)
        name.val('')
        content.val('')
        loadMesseges()
    }

    $('#refresh').click(loadMesseges)
}
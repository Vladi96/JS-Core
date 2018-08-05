function loadCommits() {
    let userName = $('#username').val()
    let repository = $('#repo').val()
    $('#commits').empty()
    let req = {
        url: `https://api.github.com/repos/${userName}/${repository}/commits`,
        success: loadRepos,
        error:(e)=>{
            $('#commits').append($('<li>').text(`Error: ${e.status} (${e.statusText})`))
        }
    }

    $.ajax(req)
    function loadRepos(data) {
        for (let row of data) {
            let li = $(`<li></li>`).text(`${row.commit.author.name}: ${row.commit.message}`)
            $('#commits').append(li)
        }
    }
}

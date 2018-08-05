function startApp() {
    const baseUrl = 'https://baas.kinvey,com/'
    const appKey = 'kid_HyiujrJB7'
    const appSecret = '8a52fd8907c04f7eb7e1faa111006f63'
    $('header a').show()

    function navigateTo(e) {
        $('section').hide()
        let target = $(e.target).attr('data-target')
        $(`#${target}`).show()
    }

    $('header').find('a[data-target]').click(navigateTo)
    let requester = (() => {


        function makeRequest(method, module, url, auth) {
            return {
                url: baseUrl + module + '/' + appKey + '/' + url,
                method,
                headers: {
                    'Authorization': makeAuth(auth)
                }
            }
        }

        function get(module, url, auth) {
            return $.ajax(makeAuth('GET', module, url, auth))
        }

        function post(module, url, data, auth,) {
            let req = makeAuth('POST', module, url, auth)
            req.data = JSON.stringify(data)
            return $.ajax(req)
        }

        function update(module, url, data, auth,) {
            let req = makeAuth('PUT', module, url, auth)
            req.data = JSON.stringify(data)
            return $.ajax(req)
        }

        function remove(module, url, auth) {
            return $.ajax(makeAuth('DELETE', module, url, auth))
        }

        return {
            get, post, remove, update
        }
    })()

    function makeAuth(type) {
        if (type === 'basic')
            return 'Basic ' + btoa(appKey + ':' + appSecret)
        else
            return 'Kinvey ' + localStorage.getItem('authtoken')
    }

    $('#buttonLoginUser').click(login)

    async function login() {
        let form = $('#formLogin')
        let username = form.find('input[name="username"]').val()
        let password = form.find('input[name="passwd"]').val()
        saveSession(requester.post('user', 'login', {username, password}, 'basic'))
        // showView('asd')
    }

    function saveSession(data) {
        localStorage.setItem('username', data.username)
        localStorage.setItem('id', data._id)
        localStorage.setItem('authtoken', data._kmd.authtoken)
    }

}
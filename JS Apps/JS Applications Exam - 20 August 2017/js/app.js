$(() => {
    let app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs')
        this.get('#/home', getWellcomePage)
        this.get('index.html', getWellcomePage)

        function calcTime(dateIsoFormat) {
            let diff = new Date - (new Date(dateIsoFormat));
            diff = Math.floor(diff / 60000);
            if (diff < 1) return 'less than a minute';
            if (diff < 60) return diff + ' minute' + pluralize(diff);
            diff = Math.floor(diff / 60);
            if (diff < 24) return diff + ' hour' + pluralize(diff);
            diff = Math.floor(diff / 24);
            if (diff < 30) return diff + ' day' + pluralize(diff);
            diff = Math.floor(diff / 30);
            if (diff < 12) return diff + ' month' + pluralize(diff);
            diff = Math.floor(diff / 12);
            return diff + ' year' + pluralize(diff);

            function pluralize(value) {
                if (value !== 1) return 's';
                else return '';
            }
        }

        function getWellcomePage() {
            this.isAuth = auth.isAuth()
            if (!auth.isAuth()) {
                this.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    login: './templates/forms/login.hbs',
                    register: './templates/forms/register.hbs',
                }).then(function () {
                    this.partial('./templates/wellcome.hbs')
                })
            }
            else {
                this.redirect('#/catalog')
            }
        }

        this.post('#/register', function () {
            let username = this.params.username
            let password = this.params.password
            let repPass = this.params.repeatPass

            auth.register(username, password).then((userDate) => {
                auth.saveSession(userDate)
                notify.showInfo('User Registratio   n succsesfull')
                this.redirect('#/catalog')
            }).catch(notify.handleError)
        })

        this.post('#/login', function () {
            let username = this.params.username
            let password = this.params.password
            auth.login(username, password)
                .then((userData) => {
                    auth.saveSession(userData)
                    notify.showInfo('Login successful!')
                    this.redirect('#/catalog')
                })
                .catch(notify.handleError)
        })

        this.get('#/logout', function () {
            auth.logout()
                .then(() => {
                    sessionStorage.clear()
                    this.redirect('#/home')
                }).catch(notify.handleError)
        })
        this.get('#/catalog', function () {
            if (!auth.isAuth()) {
                this.redirect('#/home')
            }
            else {
                posts.getAllPosts()
                    .then((posts) => {
                        posts.forEach((post, i) => {
                            post.rank = i + 1
                            post.isAuthor = post._acgetMyPostsl.creator === sessionStorage.getItem('userId')
                            post.date = calcTime(post._kmd.ect)
                        })
                        this.isAuth = auth.isAuth()
                        this.username = sessionStorage.getItem('username')
                        this.posts = posts
                        this.loadPartials({
                            header: './templates/common/header.hbs',
                            footer: './templates/common/footer.hbs',
                            navigation: './templates/common/navigation.hbs',
                            post: './templates/posts/post.hbs',
                        }).then(function () {
                            this.partial('./templates/posts/catalogPage.hbs',)
                        })
                    })
            }
        })

        this.get('#/create/post', function () {
            if (!auth.isAuth()) {
                this.redirect('#/home')
            } else {
                this.isAuth = auth.isAuth()
                this.username = sessionStorage.getItem('username')
                this.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                }).then(function () {
                    this.partial('./templates/posts/createPost.hbs')
                })

            }
        })

        this.post('#/create/post', function () {
            let url = this.params.url
            let author = sessionStorage.getItem('username')
            let imageUrl = this.params.imageUrl
            let title = this.params.title
            let description = this.params.description
            if (title === '') {
                notify.showError('Title is required!')
            } else if (url === '') {
                notify.showError('Link url is required!')
            } else if (!url.startsWith('http')) {
                notify.showError('Url must be a valid Link')
            } else {

            }
            posts.createPost(author, title, description, url, imageUrl).then(() => {
                notify.showInfo('Post created!')
                this.redirect('#/catalog')
            }).catch(notify.handleError)
        })

        this.get('#/edit/post/:postId', function () {
            if (!auth.isAuth()) {
                this.redirect('#/home')
            } else {
                let postId = this.params.postId
                posts.getPostById(postId).then((post) => {
                    this.isAuth = auth.isAuth()
                    this.username = sessionStorage.getItem('username')
                    this.post = post
                    this.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                    }).then(function () {
                        this.partial('./templates/posts/editPost.hbs')
                    })
                })

            }
        })

        this.post('#/edit/post', function () {
            let url = this.params.url
            let author = sessionStorage.getItem('username')
            let imageUrl = this.params.imageUrl
            let title = this.params.title
            let description = this.params.description
            let postId = this.params.postId
            posts.editPost(postId, author, title, description, url, imageUrl)
                .then(() => {
                    notify.showInfo(`Post ${title} updated.`)
                    this.redirect('#/catalog')
                })
                .catch(notify.showError)
        })

        this.get('#/delete/post/:postId', function () {
            if (!auth.isAuth()) {
                this.redirect('#/home')
            } else {
                let postId = this.params.postId
                posts.deletePost(postId).then(()=>{
                    notify.showInfo('Post Deleted')
                    this.redirect('#/catalog')
                })

            }
        })

    })
    app.run()
});
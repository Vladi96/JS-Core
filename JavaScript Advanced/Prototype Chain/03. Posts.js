function soleve() {

class Post {
    constructor(title, content) {
        this.title = title
        this.content = content
    }

    toString() {
        return `Post: ${this.title}\nContent: ${this.content}`
    }
}

class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
        super(title, content)
        this.likes = likes
        this.dislikes = dislikes
        this.allComents = []
    }

    toString() {
        let string = super.toString() + `\nRating: ${Number(this.likes) - this.dislikes}`
        if(this.allComents.length>0){
            string +=`\nComments:\n ${this.allComents.map(e => ' * ' + e).toString().split(',').join('\n').trim()}`
        }
        return string
    }

    addComment(coment) {
        this.allComents.push(coment)
    }
}
class BlogPost extends Post{
    constructor(title, content){
        super(title, content,views )
        this.views=Number(views)
    }
    view(){
        this.views++
        return this
    }
    toString(){
        super.toString()
    }
}
return {
    Post,
    SocialMediaPost,
    BlogPost
}}

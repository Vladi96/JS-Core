class BookCollection {

    // TODO: implement this class
    constructor(shelfGenre, room, shelfCapacity) {
        this.shelf = []
        this.room = room
        if (this.room === 'livingRoom' || this.room === 'bedRoom' || this.room === 'closet') {
            this.shelfGenre = shelfGenre
            this.shelfCapacity = shelfCapacity
        } else {
            throw `Cannot have book shelf in ${this.room}`
        }
    }

    addBook(bookName, bookAuthor, genre = '') {
        if (this.shelfCapacity > 0) {
            this.shelf.push({
                bookAuthor: bookAuthor,
                bookName: bookName,
                genre: genre
            })
            this.shelfCapacity--
        }
        else {
            this.shelf.shift()
            this.shelf.push({
                bookAuthor: bookAuthor,
                bookName: bookName,
                genre: genre
            })
        }
    }

    throwAwayBook(bookName) {
        let br = 0
        for (let book of this.shelf) {
            if (book.bookName === bookName) {
                this.shelf.splice(1, br)
            }
            br++
        }
    }

    showBooks(genre) {
        let sortable = [];
        let result = `Results for search "${genre}":\n`
        for (let row of this.shelf) {
            if (row.genre === genre) {
                sortable.push([row.bookAuthor, row.bookName]);
            }
            sortable.sort(function (a, b) {
                return a[0].localeCompare(b[0]);
            })
        }
        for (let row of sortable) {
            result += `\uD83D\uDCD6 ${row[0]} - "${row[1]}"\n`
        }
        return result
    }
    get shelfCondition(){
        return this.shelfCapacity
    }
    toString() {
        if(this.shelf.length<1){
            return `It's an empty shelf`
        }else {
            let result =`${this.shelfGenre} shelf in ${this.room} contains:\n`
            for (let row of this.shelf) {
                result+=`\uD83D\uDCD6 "${row.bookName}" - ${row.bookAuthor}`
            }
            return result.join('\n')
        }
    }

}




let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log(bedRoom.showBooks("history"));
;


class MailBox {
    constructor(result) {
        this.result = []
    }

    addMessage(subject, text) {
        this.result.push({
            subject, text
        })
        return this
    }

    get messageCount() {
        return this.result.length
    }

    deleteAllMessages() {
        this.result = []
    }

    findBySubject(substr) {
        let toPrint = []
        for (let row of this.result) {
            if (row.subject.includes(substr)) {
                toPrint.push(row)
            }
        }
        return toPrint
    }

    toString() {
        if (this.result.length < 1) {
            return ` * (empty mailbox)`
        }
        else {
            return this.result.map(m => ` * [${m.subject}] ${m.text}`).join('\n')
        }
    }
}

let b = new MailBox()
b.addMessage('vladi', 'opitva se da opravi zada`ata')
b.addMessage('vladi', 'opitva se da opravi zada`ata')
b.addMessage('joro', 'opitva se da opravi zada`ata')
console.log(b);
console.log(b.messageCount)
console.log(b.toString());
function travel(input) {
    let find = input.shift().split(input.shift())
    let valid = []
    let invalid = []
    for (let i = 0; i < input.length; i++) {
        let some = find.toString().split(',')
        let row = input[i].toLowerCase().split(' ')
        for (let r of row) {
            if (some.includes(r)) {
                let index = some.indexOf(r)
                some.splice(index, 1)
            }
        }
        if (some.length < 1) {
            valid.push(input[i])
        }
        else {
            invalid.push(input[i])
        }
    }
    if (valid.length <1) {
        console.log('InvalidSentences')
        for (let i = 0; i < invalid.length; i++) {
            console.log(`${i + 1}. ${invalid[i].toLowerCase()}`)
        }
    }
    else if (invalid.length < 1) {
        console.log('ValidSentences')
        for (let i = 0; i < valid.length; i++) {
            console.log(`${i + 1}. ${valid[i].toLowerCase()}`)
        }
    }
    else {
        console.log('ValidSentences')
        for (let i = 0; i < valid.length; i++) {
            console.log(`${i + 1}. ${valid[i].toLowerCase()}`)
        }
        console.log('='.repeat(30))
        console.log('InvalidSentences')
        for (let i = 0; i < invalid.length; i++) {
            console.log(`${i + 1}. ${invalid[i].toLowerCase()}`)
        }
    }
}

// travel(["bulgariatour@, minkatrans@, koftipochivkaltd",
//     "@, ",
//     "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
//     "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
//     "someone continues as no "]
// )
travel(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@, ",
    "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
)
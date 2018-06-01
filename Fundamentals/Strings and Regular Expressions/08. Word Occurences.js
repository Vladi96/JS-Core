function wordOccurences(text,word) {
    let pattern = new RegExp(`\\b${word}\\b`,'mgi')
    console.log((text.match(pattern)||[]).length)
}
wordOccurences('There was one. Therefore I bought it. I wouldnt buy it otherwise.','there')
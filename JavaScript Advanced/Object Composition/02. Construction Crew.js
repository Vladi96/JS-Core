function modify(obj) {
    if (obj['handsShaking'] === false) {
        return obj
    } else {
        let kilograms = obj['weight']
        let exp = obj['experience']
        obj['bloodAlcoholLevel'] += kilograms * (exp / 10)
        obj['handsShaking']=false
        return obj
    }
}

modify({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
})

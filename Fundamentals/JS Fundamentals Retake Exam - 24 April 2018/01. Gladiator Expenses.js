function gladiator(lostFight,helmetPrice,sword,shield,armor) {
    let total = 0
    let br = 0
    for (let i = 1; i <= lostFight; i++) {
        if (i % 2 === 0) {
            total += helmetPrice
            if (i % 3 === 0) {
                br++
                total += sword
                total += shield
                if (br % 2 === 0) {
                    total += armor
                }
            }
        }
        else if (i % 3 === 0) {
            total += sword
        }
    }
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`)
}

gladiator(7, 2, 3, 4, 5)
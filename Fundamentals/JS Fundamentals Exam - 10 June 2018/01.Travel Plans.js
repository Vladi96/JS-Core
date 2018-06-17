function travel(input) {
    let specialnost = 0, avar =0,clumsy=0
    let spe =[
        'Programming','Hardware maintenance','Cooking','Designing','Translating',
    ]
    let av =[
        'Driving','Managing','Fishing','Gardening'
    ]
    let cl =[
        'Singing','Accounting','Teaching','Exam-Making','Acting','Writing','Lecturing','Modeling','Nursing'
    ]
    let first=0
    let resultSum=0
    for (let row of input) {
            let [spec, many] =row.split(' : ')
        if(spe.includes(spec) && many>200){
                specialnost+=1
            if(specialnost%2===0){
                resultSum+=200
            }
            resultSum+= many-(many*0.2)
        }
        else if(av.includes(spec)){
                avar+=1
            resultSum+=many-(many*0.2)
        }

        else if(cl.includes(spec)){
                clumsy+=1

            if(clumsy%2===0){
                    resultSum+=many-(first*0.05)
            }
            if(clumsy%3===0){
                    resultSum+=many-(first*0.1)
            }
            else {
                    first =Number(many)
                    resultSum+=Number(many)
            }
        }
    }
    if(resultSum<1000){
        console.log(`Final sum: ${resultSum.toFixed(2)}`)
        console.log(`Mariyka need to earn ${(1000-resultSum).toFixed(2)} gold more to continue in the next task.`)
    }
    else {
        console.log(`Final sum: ${resultSum.toFixed(2)}`)
        console.log(`Mariyka earned ${(resultSum-1000).toFixed(2)} gold more.`)
    }
}
travel(['Programming : 500',
'Driving : 243.55',
'Acting : 200',
'Singing : 100',
'Cooking : 199',
'Hardware maintenance : 800',
'Gardening : 700',
'Programming : 500'])
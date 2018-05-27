function tableOfCityAndSum(arr) {
    let city =[]
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let currTown = arr[i].split("|")[1].trim();
        city.push(currTown)
        sum+=Number(arr[i].split("| ")[2])
    }
    console.log(city.toString().split(',').join(', '))
    console.log(sum)
}
tableOfCityAndSum(['| Sofia           | 300',
                   '| Veliko Tarnovo  | 500',
                   '| Yambol          | 275']
)
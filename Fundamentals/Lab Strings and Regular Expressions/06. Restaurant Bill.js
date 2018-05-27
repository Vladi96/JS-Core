function bill(arr) {
    let sum=0
    let products=[]
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            sum+=Number(arr[i])
        }
        else{
            products.push(arr[i])
        }
    }
    console.log(`You purchased ${products.toString().split(',').join(', ')} for a total sum of ${sum}`)
}

bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69'])
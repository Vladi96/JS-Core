function cookingNumbers(input) {
    let result = input[0]
    for (let i = 1; i < input.length; i++) {
        switch (input[i]){
            case 'dice': result = Math.sqrt(result)
                break
            case 'spice': result+=1
                break
            case 'chop': result/=2
                break
            case 'bake': result*=3
                break
            case 'fillet': result -= (0.2*result)
            break
        }
        console.log(result)
    }
}
cookingNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])
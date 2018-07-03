function carFactory(carObj) {
    let val = 0,carPower =0

    if (carObj.power <= 90) {
        val = 1800
        carPower=90
    }
    else if (carObj.power<= 120) {
        val = 2400
        carPower=120
    } else {
        val = 3500
        carPower=200
    }

    let wheels =Number(carObj.wheelsize)
    if(wheels%2===0){
        wheels-=1
    }
    let car = {
        model: carObj.model,
        engine: {
            power: carPower,
            volume: val
        },
        carriage: {
            type:carObj.carriage,
            color:carObj.color
        },
        wheels:[wheels, wheels,wheels, wheels]
    }
  return car
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})
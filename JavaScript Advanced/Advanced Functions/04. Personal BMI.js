function personalInfo(name, age, weight, height) {
    let personInfo = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / Math.pow(height / 100, 2)),
        status: ''
    }
    if (personInfo.BMI < 18.5) {
        personInfo.status = 'underweight'
    }
    else if (personInfo.BMI < 25) {
        personInfo.status = 'normal'
    }
    else if (personInfo.BMI < 30) {
        personInfo.status = 'overweight'
    } else {
        personInfo.status = 'obese'
        personInfo['recommendation']='admission required'
    }
   return personInfo
}

console.log(personalInfo('Peter', 29, 75, 182));
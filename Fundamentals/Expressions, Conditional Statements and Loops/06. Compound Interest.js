
function solve(input) {
    let principal = input[0];
    let interestRate = input[1]/100;
    let compoundingPeriod = input[2];
    let timespan = input[3];

    let frequency = 12/compoundingPeriod;

    console.log((principal*Math.pow((1+interestRate/frequency),frequency*timespan)).toFixed(2));

}
solve([1500, 4.3, 3, 6])
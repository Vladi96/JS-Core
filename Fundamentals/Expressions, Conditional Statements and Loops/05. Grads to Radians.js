function htmlEscape(input) {
    let degree = 0.9 * input;

    while (degree < 0 || degree >= 360) {
        if (degree<0)
            degree = 360 - Math.abs(degree);
        else
            degree = degree-360;
    }
    console.log(degree);
}
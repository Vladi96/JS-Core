function minke(input) {

    let cuntry = /\b([A-Z]+[a-z]+[A-Z]+)\b/gm
    let startIndex = Number(input.shift()), endIndex = Number(input.shift())
    let replace = input.shift()
    let result = ''
    result = cuntry.exec(input)[0].toLowerCase()
    result = result.replace(result.substring(startIndex, endIndex + 1), replace)
    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let city = /([0-9]{3}\.[0-9]+)|([0-9]{3})/g
    let pp = []
    for (let row of input) {
        let match
        while (match = city.exec(row))
            pp.push(`${Number(match[0])}`)
    }
    let resCity =pp.map(e => Number(e)).map(e=>Math.ceil(e)).map(e=>String.fromCharCode(e)).toString()
    resCity = resCity.split(',').join('')
    console.log(cap(result)+' => '+ cap(resCity))


}

minke(["3", "5", "gar", "114 sDfia 1, riDl10 confin$4%#ed117 likewis it humanity aTe114.223432 BultoriA - VarnD railLery101 an unpacked as he"])
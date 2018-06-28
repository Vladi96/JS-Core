function sort(arr, method) {
    let ascending = function (a, b) {
        return a - b
    }
    let descending = function (a, b) {
        return b - a
    }
    let obj = {
        'asc': ascending,
        'desc': descending
    }
    return arr.sort(obj[method])
}

sort(['2', '5', '9', '10'], 'desc')
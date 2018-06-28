let solution = (function () {
    return {
        add: function (vec1, vec2) {
            return [vec1[0] + vec2[0], vec1[1] + vec2[1]]
        },
        multiply: function (vec1, vec2) {
            return [vec1[0] *vec2, vec1[1] * vec2]
        },
        length: function (first) {
            return Math.sqrt(first[0] * first[0] + first[1] * first[1])
        },
        dot: function (first,second) {
            return first[0]*second[0]+ first[1]*second[1]
        },
        cross: function (first,second) {
            return first[0] * second[1] - first[1] * second[0]
        }
    }
})()
console.log(solution.dot([2, 3], [2, -1]));

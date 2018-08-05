function attachEvents() {
    $('#submit').click(checkTown)

    function checkTown() {
        let currentTown = $('#location').val()
        let town = '', id
        let req = {
            url: 'https://judgetests.firebaseio.com/locations.json',
            success: loadTownId,

        }
        $.ajax(req)

        function loadTownId(data) {
            for (let row of data) {
                if (row.name === currentTown) {
                    town = row.name
                    id = row.code
                    $.ajax({
                        url: `https://judgetests.firebaseio.com/forecast/today/${id}.json`,
                        success: loadToday,

                    })
                    $.ajax({
                        url: `https://judgetests.firebaseio.com/forecast/upcoming/${id}.json`,
                        success: loadThreeDays
                    })
                }
            }
           // $('#forecast').empty().css('display','').append($('<span>Error</span>'))
        }
    }

    let pic = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }

    function loadToday(data) {
        let divResult = $('#forecast')
        divResult.css('display', '')
        let weather = data.forecast.condition
        let current = $('#current')
        current.empty()
        current.append($('<span class="label">Current conditions</span>'))
        current.append($(`<span class="condition symbol">${pic[weather]}</span>`))

        let span = $('<span class="condition">')
        span.append($(`<span class="forecast-data">${data.name}</span>`))
        span.append($(`<span class="forecast-data">${data.forecast.low}&#176/${data.forecast.high}&#176</span>`))
        span.append($(`<span class="forecast-data">${weather}</span>`))
        current.append(span)
    }

    function loadThreeDays(data) {
        let spanDays = $('#upcoming')
        spanDays.empty()
        spanDays.append($('<div class="label">Three-day forecast</div>'))
        for (let row in data.forecast) {
            let span = $('<span class="upcoming">')
            let [condition, low, high] = [data.forecast[row].condition, data.forecast[row].low, data.forecast[row].high]
            span.append($(`<span class="symbol">${pic[condition]}</span>`))
            span.append($(`<span class="forecast-data">${low}&#176/${high}&#176</span>`))
            span.append($(`<span class="forecast-data">${condition}</span>`))
            spanDays.append(span)
        }

    }
}
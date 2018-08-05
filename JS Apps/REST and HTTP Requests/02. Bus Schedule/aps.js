function solve() {
    let currentId = 'depot'
    let btnDepart = $('#depart')
    let btnArrived = $('#arrive')
    let printOutput = $('.info')

    function depart() {
        btnDepart.prop('disabled', true)
        btnArrived.attr('disabled', false)
        let req = {
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`,
            method: 'GET',
            success: moveAndStop
        }
        $.ajax(req)
    }

    let busStopName = ''

    function moveAndStop(date) {
        if (date) {
            busStopName = date.name
            printOutput.text(`Next stop ${busStopName}`)
            currentId = date.next
        }
        else {
            printOutput.text(`Arriving at ${busStopName}`)
        }
    }

    function arrive() {
        btnDepart.prop('disabled', false)
        btnArrived.attr('disabled', true)
        moveAndStop()
    }

    return {
        arrive,
        depart
    }
}



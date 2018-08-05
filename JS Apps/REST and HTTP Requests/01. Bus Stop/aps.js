function getInfo() {
    let busName = $('#stopName')
    let busStops=$('#buses')
    let req = {
        url: `https://judgetests.firebaseio.com/businfo/${$('#stopId').val()}.json`,
        method: 'GET',
        success: showBusStops,
        error: ()=>{busName.text('Error');
            busStops.empty()
        }
    }
    $.ajax(req)

    function showBusStops(data) {
        busName.text(data.name)
        busStops.empty()
        for (let element in data.buses) {
            busStops.append($('<li>').text(`Bus ${element} arrives in ${data.buses[element]} minutes`))
        }
    }
}

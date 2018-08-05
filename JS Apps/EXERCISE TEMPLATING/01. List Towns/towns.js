async function attachEvents() {
    let input = await $('#towns')
    let templateHtml = await $('#towns-template').html()
    let resultHtml = Handlebars.compile(templateHtml)
    await $('#btnLoadTowns').click(() => {
        let result = input.val().split(', ')
        $('#root li').remove()
        for (let row of result) {
            $('#root').append(resultHtml({Town:row}))
        }
    })
}
(async () => {
    let dataList = await $.get('data.json')
    let contactHtml = await $.get('templating/loadContactsList.hbs')
    let contactTemplate = Handlebars.compile(contactHtml)
    let result = contactTemplate({contacts: dataList})
    $('#list').append(result)

    let loadInfoHtml = await $.get('templating/loadInfo.hbs')
    let contactInfo = Handlebars.compile(loadInfoHtml)

    $('.contact').click(function () {
        let index = $(this).attr('data-id')
        let resultInfo = contactInfo(dataList[index])
        $('#details div').remove()
        $('#details').append(resultInfo)
    })

})()
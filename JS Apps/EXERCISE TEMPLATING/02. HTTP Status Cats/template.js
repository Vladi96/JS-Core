$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        // TODO: Render cat template and attach events
        let temp = await $('#cat-template').html()
        let resTemplate = Handlebars.compile(temp)
        for (let row of cats) {

            $('#allCats').append(resTemplate({
                id: row.id,
                imageLocation: row.imageLocation,
                statusCode: row.statusCode,
                statusMessage: row.statusMessage
            }))
        }
        await $('.btn-primary').click(function () {
           let clickedItem = $(this)
            if(clickedItem.text()==='Show status code'){
               clickedItem.text('Hide status code')
            }
            else{
               clickedItem.text('Show status code')
            }
            clickedItem.next('div').toggle()
        })
    }
})

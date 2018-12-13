
const fetch = function () {
    let teamName = $("#name-input").val()
    $.get(`/teams/${teamName}`, function (playerData) {
        console.log(playerData)        
        render(playerData)
    }
    )
}

const render = function (playerData){
    $("#player-info").empty()
    let source = $("#players-template").html()
    let template = Handlebars.compile(source)
    let newHTML = template({playerData})
    $("#player-info").append(newHTML)
}
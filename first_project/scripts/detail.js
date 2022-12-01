function submenuover(value){
    value.style.color = "white";
    value.style.backgroundColor = "#2C2B2F";
    value.style.borderBottom = "2px solid #FFFF00";
}

function submenuleave(value){
    if ($("section").attr("id") != value.id)
    {
        value.style.backgroundColor = "white";
        value.style.color = "gray";
        value.style.border = "none";
        value.style.borderBottom = "none";
    }
}

$(function () {
    const listId = new URL(window.location).searchParams.get('id')
    let listHtml
    const requestURL = '../../data/list.json'
    const request = new XMLHttpRequest()
    request.open('get', requestURL)
    request.responseType = 'json'
    request.send()
    request.onload = function(){
        const listInfo = $("section").attr("id")        
        const list = request.response[listInfo].filter(e => e.id == listId)
        const tagHref = Object.keys(list[0].detail.tag)
        const tagName = Object.values(list[0].detail.tag)
        $("#main_text").append(list[0].name + " (" + list[0].detail.name + ")")
        console.log(listInfo)
        listHtml = 
        "<img class='toolImage' src='../../images/list/"+list[0].img + "' alt='" + list[0].name + "'>"
        + "<article class='explan'>"
        + "<div class='explan_text'>"
        + "<h1>" + list[0].name + " (" +list[0].detail.name+ ")</h1>"
        + "<p>" + list[0].detail.comment+ "</p>"
        + "<div id='tags' class='tags'></div>"
        + "</div>"
        + "</article>"
        $("section").html(listHtml)
        switch(listInfo){
            case 'goods': {
                for(let i = 0; i < tagHref.length; i++){
                    $("#tags").append("<a href='../Exercise/main.html?id=" + tagName[i] + "'>#" + tagName[i]+ "</a>")
                }
                break;
            }
            case 'exercise': {
                for(let i = 0; i < tagHref.length; i++){
                    $("#tags").append("<a href='../Parts/main.html?id=" + tagName[i] + "'>#" + tagName[i]+ "</a>")
                }
                break;
            }
        }
    }
})
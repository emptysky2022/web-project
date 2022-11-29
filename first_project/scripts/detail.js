$(function () {
    const goodsID = new URL(window.location).searchParams.get('id')
    let goodHtml
    const requestURL = '../../data/list.json'
    const request = new XMLHttpRequest()
    request.open('get', requestURL)
    request.responseType = 'json'
    request.send()
    request.onload = function(){
        const listInfo = $("section").attr("id")        
        const list = request.response[listInfo].filter(e => e.id == goodsID)
        const tagHref = Object.keys(list[0].detail.tag)
        const tagName = Object.values(list[0].detail.tag)
        goodHtml = 
        "<img class='toolImage' src='../../images/"+list[0].img + "' alt='" + list[0].name + "'>"
        + "<article class='explan'>"
        + "<div class='explan_text'>"
        + "<h1>" + list[0].name + " (" +list[0].detail.name+ ")</h1>"
        + "<h3>난이도: 5.0/5.0</h3>"
        + "<p>" + list[0].detail.comment+ "</p>"
        + "<div id='tags' class='tags'></div>"
        + "</div>"
        + "</article>"
        $("section").html(goodHtml)
        for(let i = 0; i < tagHref.length; i++){
            $("#tags").append("<a href='" + tagHref[i] + "'>#" + tagName[i]+ "</a>")
        }
    }
})
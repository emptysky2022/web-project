$(function () {
    const goodsID = new URL(window.location).searchParams.get('id')
    let goodHtml
    const requestURL = '../data/list.json'
    const request = new XMLHttpRequest()
    request.open('get', requestURL)
    request.responseType = 'json'
    request.send()
    request.onload = function(){        
        const list = request.response.filter(e => e.id == goodsID)
        goodHtml = 
        "<img class='toolImage' src='../images/"+list[0].img + "' alt='" + list[0].p + "'>"
        + "<article clas='explan'>"
        + "<div class='explan_text'>"
        + "<h1>" + list[0].p +"</h1>"
        + "<h3>난이도: 5.0/5.0</h3>"
        + "<p>많이 볼 수 있던 운동기구이다.</p>"
        + "</div>"
        + "</article>"
        $("section").html(goodHtml)
    }
})
$(function() {
    const requestURL = '../data/list.json'
    const request = new XMLHttpRequest()
    request.open('get', requestURL)
    request.responseType = 'json'
    request.send()
    request.onload = function(){
        const list = request.response
        let listHtml = ''
        for(i = 0; i < list.length; i++){
            listHtml += 
            "<div id='"+list[i].id+"' class='list'>"
            + "<img src='../images/"+list[i].img+"' alt='"+list[i].p+"'>"
            + "<p>" + list[i].p + "</p>"
            +"</div>"
        }
        $(".content").html(listHtml)
        $(".list").click(function () { 
            // const state = { 'something': $(this).text()}
            // const title = "test something"
            // const url = "something.html"
            // console.log($(this).text())
            // history.pushState(state, title, url)
            location.href = "something.html?id=" + $(this).attr("id")
        });
    }
})

// window.onpopstate = function(e){
//     alert("location: " + document.location + ", state: " + JSON.stringify(e.state))
// }
$(function() {
    let listHtml = ''
    const requestURL = '../data/list.json'
    const request = new XMLHttpRequest()
    request.open('get', requestURL)
    request.responseType = 'json'
    request.send()
    request.onload = function(){
        const list = request.response
        for(i = 0; i < list.length; i++){
            listHtml = 
            "<div id='"+list[i].id+"' class='list'>"
            + "<img src='../images/"+list[i].img+"' alt='"+list[i].p+"'>"
            + "<p>" + list[i].p + "</p>"
            +"</div>"
            $(".content").append(listHtml)
        }
        $(".list").click(function () { 
            location.href = "something.html?id=" + $(this).attr("id")
        });
    }
    $(window).scroll(function(){
        if(Math.ceil($(window).scrollTop() + $(window).height() >= $(document).height() - 20)){
            const list = request.response
            for(i = 0; i < list.length; i++){
                listHtml = 
                "<div id='"+list[i].id+"' class='list'>"
                + "<img src='../images/"+list[i].img+"' alt='"+list[i].p+"'>"
                + "<p>" + list[i].p + "</p>"
                +"</div>"
                $(".content").append(listHtml)
            }
        }
        $(".list").click(function () { 
            location.href = "something.html?id=" + $(this).attr("id")
        });
    })
})

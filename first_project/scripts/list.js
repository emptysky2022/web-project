$(function() {
    let listHtml = ''
    const requestURL = '../../data/list.json'
    const request = new XMLHttpRequest()
    request.open('get', requestURL)
    request.responseType = 'json'
    request.send()
    request.onload = function(){
        const listInfo = $("section").attr("id")
        const list = request.response[listInfo]
        console.log(list)
        for(i = 0; i < list.length; i++){
            listHtml = 
            "<div id='"+list[i].id+"' class='list'>"
            + "<img src='../../images/"+list[i].img+"' alt='"+list[i].name+"'>"
            + "<p>" + list[i].name + "</p>"
            +"</div>"
            $(".content").append(listHtml)
        }
        $(".list").click(function () { 
            location.href = "detail.html?id=" + $(this).attr("id")
        });
    }
    $(window).scroll(function(){
        if(Math.ceil($(window).scrollTop() + $(window).height() >= $(document).height() - 20)){
            const listInfo = $("section").attr("id")
            const list = request.response[listInfo]
            for(i = 0; i < list.length; i++){
                listHtml = 
                "<div id='"+list[i].id+"' class='list'>"
                + "<img src='../../images/"+list[i].img+"' alt='"+list[i].name+"'>"
                + "<p>" + list[i].name + "</p>"
                +"</div>"
                $(".content").append(listHtml)
            }
        }
        $(".list").click(function () { 
            location.href = "detail.html?id=" + $(this).attr("id")
        });
    })
})

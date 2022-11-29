function pushTagList(list, searchTags) {  
    for(i = 0; i < list.length; i++){
        if(jQuery.inArray(searchTags, list[i].tag) != -1){
            console.log(list[i].tag)
            listHtml = 
            "<div id='"+list[i].id+"' class='list swiper-slide'>"
            + "<img src='../../images/"+list[i].img+"' alt='"+list[i].name+"'>"
            + "<p>" + list[i].name + "</p>"
            +"</div>"
            $(".content:last-child").append(listHtml)
        }
    }
    $(".list").click(function () { 
        location.href = "detail.html?id=" + $(this).attr("id")
    })
}
function pushSwiper() {  
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

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
        for(i = 0; i < 4; i++){
            $("article").append("<div class='swiper mySwiper'><div class='content swiper-wrapper'></div></div>")
            const listRandom = parseInt(Math.random() * list.length)
            console.log("listRandom = " + listRandom + ", list[listRandom].tag = " + list[listRandom].tag.length)
            const tagRandom = parseInt(Math.random() * list[listRandom].tag.length)
            $(".mySwiper:last-child").prepend("<p>이런건 어떠신가요? #" + list[listRandom].tag[tagRandom] + "</p>")
            pushTagList(list, list[listRandom].tag[tagRandom])
            $(".mySwiper:last-child").append("<div class='swiper-button-next'></div>" 
            + "<div class='swiper-button-prev'></div>"
            + "<div class='swiper-pagination'></div>")
            pushSwiper()
        }
        
        $("#search_check").click(function(){
            if(!$("#search").val()){
                $("#search_tag").empty().append("검색창에 태그를 입력해주세요.").show()
            }
            else{
                let searchTags = $("#search").val()
                $("#search_tag").empty().append("#" + searchTags).show()
                let list = request.response[listInfo]
                $(".content").remove();
                $("article").append("<div class='swiper mySwiper'><div class='content swiper-wrapper'></div></div>")
                pushTagList(list, searchTags)
                $(".mySwiper:last-child").append("<div class='swiper-button-next'></div>" 
                + "<div class='swiper-button-prev'></div>"
                + "<div class='swiper-pagination'></div>")
                pushSwiper()
            }
        })
        
    }
    $(window).scroll(function(){
        if(!$("#search").val()){
            if(Math.ceil($(window).scrollTop() + $(window).height() >= $(document).height() - 20)){
                const listInfo = $("section").attr("id")
                const list = request.response[listInfo]
                $("article").append("<div class='swiper mySwiper'><div class='content swiper-wrapper'></div></div>")
                const listRandom = parseInt(Math.random() * list.length)
                console.log("listRandom = " + listRandom + ", list[listRandom].tag = " + list[listRandom].tag.length)
                const tagRandom = parseInt(Math.random() * list[listRandom].tag.length)
                $(".mySwiper:last-child").prepend("<p>이런건 어떠신가요? #" + list[listRandom].tag[tagRandom] + "</p>")
                pushTagList(list, list[listRandom].tag[tagRandom])
                $(".mySwiper:last-child").append("<div class='swiper-button-next'></div>" 
                + "<div class='swiper-button-prev'></div>"
                + "<div class='swiper-pagination'></div>")
                pushSwiper()
            }
        }
    })
})

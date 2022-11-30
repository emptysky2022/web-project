function pushTagList(list, searchTags) {  
    for(i = 0; i < list.length; i++){
        if(jQuery.inArray(searchTags, list[i].tag) != -1){
            console.log(list[i].tag)
            listHtml = 
            "<div id='"+list[i].id+"' class='list swiper-slide'>"
            + "<img src='../../images/"+list[i].img+"' alt='"+list[i].name+"'>"
            + "<p>" + list[i].name + "</p>"
            +"</div>"
            $(".swiper-wrapper:last-child").append(listHtml)
        }
    }
    $(".list").click(function () { 
        location.href = "detail.html?id=" + $(this).attr("id")
    })
}
function pushSwiper() {  
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
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
        breakpoints: {
            1400: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
            800: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
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
        const listRandom = (listInfo == "exercise") ? parseInt(Math.random() * (list.length - 1)) : parseInt(Math.random() * list.length)
        const tagRandom = parseInt(Math.random() * list[listRandom].tag.length)
        $("article").append("<p>이런건 어떠신가요? #" + list[listRandom].tag[tagRandom] + "</p>")
        $("article").append("<div class='swiper mySwiper'><div class='content swiper-wrapper'></div></div>")
        console.log("listRandom = " + listRandom + ", list[listRandom].tag = " + list[listRandom].tag.length)
        pushTagList(list, list[listRandom].tag[tagRandom])
        $(".mySwiper:last-child").append("<div class='swiper-button-next'></div>" 
        + "<div class='swiper-button-prev'></div>"
        + "<div class='swiper-pagination'></div>")
        pushSwiper()
        
        $("#search_check").click(function(){
            if(!$("#search").val()){
                $("#search_tag").empty().append("검색창에 태그를 입력해주세요.").show()
            }
            else{
                let searchTags = $("#search").val()
                $("#search_tag").empty().append("#" + searchTags).show()
                let list = request.response[listInfo]
                $("article>p").remove()
                $(".mySwiper").remove();
                $("article").append("<p>다음에 대한 검색결과입니다. #" + searchTags+ "</p>")
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
            if(Math.ceil($(window).scrollTop() + $(window).height() >= $(document).height() - 50) || !($(document).hasScrollBar())){
                const listInfo = $("section").attr("id")
                const list = request.response[listInfo]
                const listRandom = (listInfo == "exercise") ? parseInt(Math.random() * (list.length - 1)) : parseInt(Math.random() * list.length)
                const tagRandom = parseInt(Math.random() * list[listRandom].tag.length)
                $("article").append("<p>이런건 어떠신가요? #" + list[listRandom].tag[tagRandom] + "</p>")
                $("article").append("<div class='swiper mySwiper'><div class='content swiper-wrapper'></div></div>")
                console.log("listRandom = " + listRandom + ", list[listRandom].tag = " + list[listRandom].tag.length)
                pushTagList(list, list[listRandom].tag[tagRandom])
                $(".mySwiper:last-child").append("<div class='swiper-button-next'></div>" 
                + "<div class='swiper-button-prev'></div>"
                + "<div class='swiper-pagination'></div>")
                pushSwiper()
            }
        }
    })
})

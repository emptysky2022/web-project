var mouseWheelEvent = 0;
//첫 실행
$(document).ready(function() {
  var documentHeight = $(document).height() / 3;
  console.log(documentHeight);
  moveScroll(0);
  //첫 오프닝
  $('.razor').animate({
      width: '2000px'
    }, 100)
    .fadeOut(2000);
  //뒷배경 삭제
  setTimeout(function() {
    $('.blackBackground').fadeOut(2000);
  }, 200);
  //뒷배경 blur
  setTimeout(function() {
    blurElement('.page', 0);
  }, 400);
  //헤드라인 표시
  setTimeout(function() {
    $('#introHeadLine').animate({top : '0px', opacity : '1'}, 500);
  }, 1000);
  
  // Icon 표시 동시 출력
  setTimeout(function() {
    $('#facebook').animate({left : '48px', opacity : '1'}, 600);
  }, 1000);
  setTimeout(function() {
    $('#instagram').animate({left : '48px', opacity : '1'}, 600);
  }, 1000);
  //로고 / 번호표 표시
  setTimeout(function() {
    $('.menuButton').animate({top : '40px',opacity : '1'}, 200);
  }, 1000);
  setTimeout(function() {
    $('.companyIcon').animate({top : '40px',opacity : '1'}, 400);
  }, 1000);
  
  setTimeout(function() {
    $('.arrow').animate({opacity : '1'}, 400);
  }, 1000);
  // pageNumberBox
  // background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
});

//blur 애니메이션
function blurElement(element, size) {
  var filterVal = 'blur(' + size + 'px)';
  $(element).css({
    'filter': filterVal,
    'webkitFilter': filterVal,
    'mozFilter': filterVal,
    'oFilter': filterVal,
    'msFilter': filterVal,
    'transition': 'all 0.5s ease-out',
    '-webkit-transition': 'all 0.5s ease-out',
    '-moz-transition': 'all 0.5s ease-out',
    '-o-transition': 'all 0.5s ease-out'
  });
}

//마우스의 휠 여부 판단
$("html").on("mousewheel", function(event) {
  if (event.originalEvent.wheelDelta < 0 && mouseWheelEvent < 10) {
    mouseWheelEvent++;
  } else if (event.originalEvent.wheelDelta > 0 && mouseWheelEvent > 0) {
    mouseWheelEvent--;
  }
  // console.log(mouseWheelEvent);
  if (mouseWheelEvent == 0) {
    moveOnePage();
  } else if (mouseWheelEvent == 5) {
    moveTwoPage();
  } else if (mouseWheelEvent == 10) {
    moveThreePage();
  }  
});

function moveOnePage(){
  console.log('page 1 start');
  //페이지 위치 저장
  var offsetTop = $('#page1').offset().top;
  //페이지 이동
  moveScroll(offsetTop);
}

function moveTwoPage(){
  console.log('page 2 start');
  var offsetTop = $('#page2').offset().top;
  moveScroll(offsetTop);
 
  effectScroll('#productHeadLine', '#productMore', '#productTitle');
}

function moveThreePage(){
  console.log('page 3 start');
  var offsetTop = $('#page3').offset().top;
  moveScroll(offsetTop);
  effectScroll('#councelingHeadLine', '#councelingMore', '#councelingTitle');
}

//스크롤 이동
function moveScroll(location) {
  $('html, body').animate({
    scrollTop: location
  }, 400);
}
function effectScroll(HeadLine, Title){
  setTimeout(function() {
    $(HeadLine).animate({top : '0px', opacity : '1'}, 800);
  }, 300);
  
  setTimeout(function() {
    $(Title).animate({bottom : '230px', opacity : '1'}, 500);
  }, 1600);
}


// 메뉴 출력
var isMenuClick = false;
$(document).on('click', '.menuButton', function(event) {
  var documentWidht = $(document).width();
  if(isMenuClick == false){
    $('.menu').animate({left : '0'}, 300);
    isMenuClick = true;
  }
  else {
    $('.menu').animate({left : documentWidht+'px'}, 300);
    isMenuClick = false;
  }
});
// 메뉴 마우스 hover 애니메이션
$(function(){
  $('.menuText').each(function(){
    $('.menuText').mouseenter(function(){
      $(this).stop().animate({opacity : "1", left : '100px'}, 200);
    });
    $('.menuText').mouseleave(function(){
      $(this).stop().animate({opacity : "0.5", left : '0px'}, 200);
    });
  });
});
// 메뉴 버튼 아래 길이 조정(hover)
$(function(){
  $('.menuButton').mouseenter(function(){
    $('.menuBtnBottomLine').stop().animate({width : '99%'}, 200);
  });
  $('.menuButton').mouseleave(function(){
    $('.menuBtnBottomLine').stop().animate({width : '50%'}, 200);
  });
});


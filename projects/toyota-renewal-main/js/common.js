$(document).ready(function () {

  // 메인슬라이드
  $(".mv").bxSlider({
    auto: true
  });

});



// 모바일메뉴 
$('.hamburger').click(function () {
  $('.sidebar').animate({
    left: '0'
  });
});


$('.close').click(function () {
  $('.sidebar').animate({
    left: '100%'
  });
});
$(document).ready(function(){
  // 페이지로딩
  $(window).load(function(){
    $('.loading-box').fadeOut();
  });

  // slick 슬라이더
  $('.about-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
  });

  // AOS
  AOS.init();

  // 메뉴 누르면 슬라이드
  $('.gnb .dep1 > a').click(function(e){
    if(this.hash) {
      e.preventDefault();

      var targetPos = $($(this).attr('href')).offset().top - 80;
      $('.body, html').animate({'scrollTop': targetPos});
    
    } 
  });


  // hamburger
  $('.hamburger').click(function(){
    $(this).toggleClass('active');
  });

  $('.dep1-arrow').click(function(){
    $('.dep2').toggleClass('active');
  }); 


  
})
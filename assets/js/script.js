$(document).ready(function(){
  // slick 슬라이더
  $('.about-slider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
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

  // mixitup
  $(function(){
    var mixer = mixitup('.portfolio-graphic');
  });

  
  // hamburger
  $('.hamburger').click(function(){
    $(this).toggleClass('active')
  });


  // lightbox
  // lightbox.option({
  //   'albumLabel': false,
  //   'maxHeight': 1080,
  // });


  // magnific popup
  $('.mfp-motion').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedConentPos: true,
    image: { verticalFit: true },
    gallery: { enabled: true },
    zoom: { enabled: true, duration: 400 },
  });

  $('.mfp-illust').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedConentPos: true,
    image: { verticalFit: true },
    gallery: { enabled: true },
    zoom: { enabled: true, duration: 400 },
  });

  $('.mfp-emoticon').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedConentPos: true,
    image: { verticalFit: true },
    gallery: { enabled: true },
    zoom: { enabled: true, duration: 400 },
  });
})
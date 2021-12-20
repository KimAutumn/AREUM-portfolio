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
  // $(function(){
    var mixer = mixitup('.portfolio-graphic');
  // });

  
  
  // hamburger
  $('.hamburger').click(function(){
    $(this).toggleClass('active');
  });

  $('.dep1-arrow').click(function(){
    $('.dep2').toggleClass('active');
  });
  


  // lightbox
  // lightbox.option({
  //   'albumLabel': false,
  //   'maxHeight': 1080,
  // });


  // magnific popup
  $('.graphic .btn').on('click', function(){
    console.log($(this).data('filter'));
    switch ($(this).data('filter')) {
      case '.motion': 
        popMotion();
        break;
      case '.illust':
        popIllust();
        break;
      case '.emoticon': 
        popEmoticon();
        break;
      case 'all':
        popAll();
        break;
    }
  });



  function popAll() {
    console.log('ALL');
    // 3
    $('.mfp').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: true,
      fixedConentPos: true,
      image: { verticalFit: true },
      gallery: { enabled: true },
      zoom: { enabled: true, duration: 400 },
    });
  }

  function popMotion() {
    $('.mfp-motion').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: true,
      fixedConentPos: true,
      image: { verticalFit: true },
      gallery: { enabled: true },
      zoom: { enabled: true, duration: 400 },
    });
  }

  function popIllust() {
    $('.mfp-illust').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: true,
      fixedConentPos: true,
      image: { verticalFit: true },
      gallery: { enabled: true },
      zoom: { enabled: true, duration: 400 },
    });
  }

  function popEmoticon() {
    $('.mfp-emoticon').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: true,
      fixedConentPos: true,
      image: { verticalFit: true },
      gallery: { enabled: true },
      zoom: { enabled: true, duration: 400 },
    });
  }


  // $('.mfp').magnificPopup({
  //   type: 'image',
  //   closeOnContentClick: true,
  //   closeBtnInside: true,
  //   fixedConentPos: true,
  //   image: { verticalFit: true },
  //   gallery: { enabled: true },
  //   zoom: { enabled: true, duration: 400 },
  // });

})
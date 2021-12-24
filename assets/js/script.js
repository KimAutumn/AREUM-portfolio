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


  // 퀵버튼 숨기기
  

  // $(window).resize(function(){
    function detectMobileDevice() {
      const minWidth = 720
    
      return window.innerWidth <= minWidth
    }
    
    const isMobile = detectMobileDevice()

    if (isMobile) {
      var isVisible = false;
  
      $('.quick').addClass('hide');
      $(window).on('scroll',function(){
        if (checkVisible($('.kv'))&&!isVisible) {
          console.log('kv영역');
          $('.quick').addClass('hide');
          isVisible=true;
        }
    
        else 
          $('.quick').removeClass('hide');
          isVisible=false
      });
    
      function checkVisible( elm, eval ) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();   
        
        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
      }
    }
  // });
})
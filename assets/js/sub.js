$(document).ready(function(){
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
});
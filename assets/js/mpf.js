$(document).ready(function(){
  // magnific popup
  popAll();
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
});
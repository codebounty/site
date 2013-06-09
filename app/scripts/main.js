'use strict';

(function($){

  /**
   * Small or Big Hack!
   */
  // $('#small').click(function(e){
  //   e.preventDefault();
  //   $('header').addClass('small');
  //   $('#cta').attr('src', 'images/header/badge-chrome.png');
  // });

  // $('#big').click(function(e){
  //   e.preventDefault();
  //   $('header').removeClass('small');
  //   $('#cta').attr('src', 'images/header/badge-chrome@2x.png');
  // });
  //

  /**
   * Scroll to detail section
   */
  $('.howto').click(function(e) {
    e.preventDefault();
    $('html,body').stop().animate({scrollTop: $('#howto').offset().top}, 500);
  });

})(jQuery);

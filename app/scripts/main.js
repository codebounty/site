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
   * Browserwrapper
   */
  $('#browser-github').browserWrapper({
    browserTitle:     'Windows Support · Issue #216 · yeoman/yeoman',
    browserURL:       'https://github.com/yeoman/yeoman/issues/216',
    filePath:         'components/browserWrapper-lite/src/',
    shadow:           '0',
  });

  $('#browser-capture').browserWrapper({
    browserTitle:     'Windows Support · Issue #216 · yeoman/yeoman',
    browserURL:       'https://github.com/yeoman/yeoman/issues/216',
    filePath:         'components/browserWrapper-lite/src/',
    shadow:           '0',
  });

  /**
   * Scroll to detail section
   */
  $('.howto').click(function(e) {
    e.preventDefault();
    $('html,body').stop().animate({scrollTop: $('#howto').offset().top}, 500);
  });

})(jQuery);

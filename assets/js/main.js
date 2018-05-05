$(window).load(function () {
  $('body').addClass('loaded');
  setTimeout(function () {
    $('.loader-wrapper').remove();
  }, 2000);
});
///////////MENU/////////
$('.mob__nav-btn').click(function () {
  $(".mob__nav").slideToggle().addClass('hidden');
});
////////////////SLIDER//////////////////
$('.jumbo__sl').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  adaptiveHeight: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

/////////////////
$('.leftblock__list-link--active').click(function (event) {
  $('.leftblock__list-link--active').toggleClass('active');
  $(".leftblock__ul2").slideToggle();
  event.preventDefault();
  event.stopPropagation();
});

//////////////////RANDOM GIFS/////////////////
function appendRandomGif(cssClass) {
  var promise = $.ajax({
    method: 'GET',
    url: '//api.giphy.com/v1/gifs/random?api_key=KIGc3oWtn7UMhhHWiEqkHAFgmJf7TsJk'
  });

  promise.done(function (dataFromGiphy) {
    // var objectAsString = JSON.stringify(dataFromGiphy);
    // alert('This is the JSON from the server: ' + objectAsString);

    //$('body').append('<img src="' + dataFromGiphy.data.image_url + '" />');

    $('.random-giphy')
      .filter('.' + cssClass)
      .attr('src', dataFromGiphy.data.image_url)
      .show();
  });

  promise.fail(function(jqXHR, textStatus) {
    alert('Request failed: ' + textStatus);
  });
}

//for (var i = 0; i < 3; i++) {
  // appendRandomGif('gif-1');
  // appendRandomGif('gif-2');
  // appendRandomGif('gif-3');
  // appendRandomGif('gif-4');
  // appendRandomGif('gif-5');
//}







/////////////////MODAL//////////
$(function() {
  //----- OPEN
  $('[data-popup-open]').on('click', function(e)  {
      var targeted_popup_class = jQuery(this).attr('data-popup-open');
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
      e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function(e)  {
      var targeted_popup_class = jQuery(this).attr('data-popup-close');
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
      e.preventDefault();
  });
});
//------ CLOSE CLICKING NOT ON THE WINDOW ????

if ( !$('[data-popup-close]','.modal-background.').length ) {
  $('<div/>').addClass('modal-background','[data-popup-close]').appendTo('body');
}

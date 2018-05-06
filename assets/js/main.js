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
    $('.random-giphy')
      .filter('.' + cssClass)
      .attr('src', dataFromGiphy.data.image_url)
      .show();
  });

  // promise.fail(function(jqXHR, textStatus) {
  //   alert('Request failed: ' + textStatus);
  // });
}

  appendRandomGif('gif-1');
  appendRandomGif('gif-2');
  appendRandomGif('gif-3');
  appendRandomGif('gif-4');
  appendRandomGif('gif-5');


/////////////////MODAL//////////
$('body').on('click', '.modal-open', function(e) {
    
  $('.modal-background, .modal').show();
  e.preventDefault();
})
.on('click', '.modal-close', function(e) {
  $('.modal-background, .modal').hide();
  e.preventDefault();
});
if ( !$('.modal-background.modal-close').length ) {
  $('<div/>').addClass('modal-background modal-close').appendTo('body');
}
$('.modal__close').click(function () {
  $(".modal, .modal-background").hide();
});



$("#formvalidate").validate({
  rules: {
    Email: {
      required: true,
      minlength: 6
    }
  },
  messages: {
    Email: {
      required: "Поле обязательно для заполнения",
      email: ""
    }
  }
});

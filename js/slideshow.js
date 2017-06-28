(function() {
  'use strict';

  var slideshow = [{
    'image': 'images/slideshow_1.jpeg',
    'caption': 'Cloudy with a chance of moon'
  }, {
    'image': 'images/slideshow_2.jpeg',
    'caption': 'Half moon mountain'
  }, {
    'image': 'images/slideshow_3.jpeg',
    'caption': 'Moonrise'
  }];

  var imgIndex = 0;

  function loadImage() {
    var img = new Image();
    img.alt = slideshow[imgIndex].caption;
    img.title = slideshow[imgIndex].caption;
    img.src = slideshow[imgIndex].image;
    img.className += 'current';

    if($('.current').length) {
      $('.current').replaceWith(img);
    }
    else {
      $('.slideshow-wrapper').prepend(img);
    }

    $('#caption').html(img.alt);
  }

  document.onload = loadImage();

  $('#next').on('click', function(){
    if(imgIndex < slideshow.length - 1) {
      imgIndex++;
      loadImage();
      handleDisabledButtons();
    }
  });

  $('#prev').on('click', function(){
    if(imgIndex > 0) {
      imgIndex--;
      loadImage();
      handleDisabledButtons();
    }
  });

  function handleDisabledButtons() {
    if(imgIndex === 0) {
      $('#prev').attr('disabled', true);
    }
    else if(imgIndex === slideshow.length - 1) {
      $('#next').attr('disabled', true);
    }
    else {
      $('section#slideshow > button').removeAttr('disabled');
    }
  };

  handleDisabledButtons();
})();

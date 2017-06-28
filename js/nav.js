(function() {
  'use strict';
  const Main_Nav_List = $('nav a');
  const Sub_Nav_List = $('.nav-panel');
  const Drop_Down = $('#dropdown');

  Main_Nav_List.on('click', function(e){
    e.preventDefault;

    if(!$(this).hasClass('active')) {
      Main_Nav_List.removeClass('active');
      $(this).addClass('active');

      Sub_Nav_List.css('display', 'none');
      var subNavItem = $(this).data('related-panel');
      $('#' + subNavItem).fadeIn('slow');

      Drop_Down.slideDown();
    }
    else {
      Drop_Down.slideUp();
      Main_Nav_List.removeClass('active');
    }
  });
})();


$(function() {
    $('.nav-sidebar li').click(function() {
      var index = $(this).index() + 1;
      $('div:not(#div' + index + ')').slideUp();
      $('#div' + index).slideDown();
    });
});

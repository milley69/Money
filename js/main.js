$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('nav,.header__burger').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

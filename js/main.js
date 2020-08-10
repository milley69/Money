$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('nav,.header__burger,.login').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

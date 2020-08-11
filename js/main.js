$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('nav,.header__burger,.login').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

if( window.screen.width >= 768 ){
     document.querySelector('.null').style.display = "none"
} else {
     document.querySelector('.null').style.display = "block"
}
console.log(document.querySelector('.null'));

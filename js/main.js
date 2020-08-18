// start burger button
var headerBurger = document.querySelector('.header-burger');
var burgerBg = document.querySelector('.burger-bg');
var headerNav = document.querySelector('.header_nav nav');
var login = document.querySelector('.login');

headerBurger.addEventListener('click', function() {
  headerBurger.classList.toggle('open'),
    headerNav.classList.toggle('open'),
    login.classList.toggle('open'),
    burgerBg.classList.toggle('open');
})
// end burger button




// let payment = document.querySelector('#payment-num').value;
// let enter = document.querySelector("#enter-num");
//
// payment.oninput = function() {
//     enter.setAttribute('value', 'payment');
//   };
function testFunction() {
  var payment = document.getElementById("payment-num").value;
  var enter = document.getElementById("enter-num");

  enter.setAttribute('value', 'payment');
  console.log(enter);
  console.log(payment);
}

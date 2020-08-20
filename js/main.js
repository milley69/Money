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

// fee
function feeFun() {
  var payment = document.getElementById("payment-num").value;
  var enter = document.getElementById("enter-num");
  var fee = payment / 100 * 99.5;
  // var fee = payment * 0.995;
  var fee = parseFloat(fee.toFixed(2));

  enter.setAttribute('value', fee);
}

// swap button
function swapSelect(addEventListener) {
  var paymentSelect = document.querySelector('#payment-select');
  var enterSelect = document.querySelector('#enter-select');
  var valOne = paymentSelect.value;
  paymentSelect.value = enterSelect.value
  enterSelect.value = valOne
}












//

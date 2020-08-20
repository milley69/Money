// support Webp
// Проверяем, можно ли использовать Webp формат
function canUseWebp() {
  // Создаем элемент canvas
  let elem = document.createElement('canvas');
  // Приводим элемент к булеву типу
  if (!!(elem.getContext && elem.getContext('2d'))) {
    // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }
  // Иначе Webp не используем
  return false;
}
//support Webp.v2
window.onload = function() {
  // Получаем все элементы с дата-атрибутом data-bg
  let images = document.querySelectorAll('[data-bg]');
  // Проходимся по каждому
  for (let i = 0; i < images.length; i++) {
    // Получаем значение каждого дата-атрибута
    let image = images[i].getAttribute('data-bg');
    // Каждому найденному элементу задаем свойство background-image с изображение формата jpg
    images[i].style.backgroundImage = 'url(' + image + ')';
  }
  // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
  let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;
  // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
  if (canUseWebp() || firefoxVer >= 65) {
    // Делаем все то же самое что и для jpg, но уже для изображений формата Webp
    let imagesWebp = document.querySelectorAll('[data-bg-webp]');
    for (let i = 0; i < imagesWebp.length; i++) {
      let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
      imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
    }
  }
};








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

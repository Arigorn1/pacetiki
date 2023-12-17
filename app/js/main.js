/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script.js */ "./js/script.js");





/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "../node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "../node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ "../node_modules/swiper/modules/navigation.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ "../node_modules/swiper/modules/pagination.css");
const buttonsParent = document.querySelector('.menu');
let activeButton = null;
function toggleClassAndColorButton(event) {
  const button = event.target;
  if (button.classList.contains('menu__btn')) {
    if (activeButton) {
      activeButton.classList.remove('menu__btn_active');
    }
    button.classList.add('menu__btn_active');
    activeButton = button;
  }
}
buttonsParent.addEventListener('click', toggleClassAndColorButton);
const burgerButton = document.querySelector('.header__icon:nth-child(1)');
const asidePanel = document.querySelector('.aside');
const cover = document.querySelector('.cover');
function toggleAsidePanel() {
  asidePanel.classList.toggle('aside_open');
  cover.classList.toggle('cover_open');
  burgerButton.classList.toggle('burger_open');
}
burgerButton.addEventListener('click', toggleAsidePanel);
cover.addEventListener('click', toggleAsidePanel);
const readMore = document.querySelector('.content__read-more');
const text = document.querySelector('.content__text');
function toggleClassAndOpenText() {
  if (text.classList.contains('content__text_open')) {
    text.classList.remove('content__text_open');
    readMore.innerHTML = "Читать далее";
  } else {
    text.classList.add('content__text_open');
    readMore.innerHTML = "Скрыть";
  }
}
readMore.addEventListener('click', toggleClassAndOpenText);
const button = document.querySelector('.btn');
const hiddenSlides767 = document.querySelectorAll('.slide_hidden-767');
const hiddenSlides1439 = document.querySelectorAll('.slide_hidden-1439');
function toggleClassAndChangeButton767() {
  hiddenSlides767.forEach(function (element) {
    if (element.classList.contains('slide_hidden-767')) {
      element.classList.remove('slide_hidden-767');
      button.innerHTML = "Скрыть";
    } else {
      element.classList.add('slide_hidden-767');
      button.innerHTML = "Показать все";
    }
  });
}
function toggleClassAndChangeButton1439() {
  hiddenSlides1439.forEach(function (element) {
    if (element.classList.contains('slide_hidden-1439')) {
      element.classList.remove('slide_hidden-1439');
      button.innerHTML = "Скрыть";
    } else {
      element.classList.add('slide_hidden-1439');
      button.innerHTML = "Показать все";
    }
  });
}
button.addEventListener('click', toggleClassAndChangeButton767);
button.addEventListener('click', toggleClassAndChangeButton1439);
const buttonDevices = document.querySelector('.btn-devices');
const hiddenDevicesSlides767 = document.querySelectorAll('.devices__slide_hidden-767');
const hiddenDevicesSlides1439 = document.querySelectorAll('.devices__slide_hidden-1439');
function toggleClassAndChangeButtonDevices767() {
  hiddenDevicesSlides767.forEach(function (element) {
    if (element.classList.contains('devices__slide_hidden-767')) {
      element.classList.remove('devices__slide_hidden-767');
      buttonDevices.innerHTML = "Скрыть";
    } else {
      element.classList.add('devices__slide_hidden-767');
      buttonDevices.innerHTML = "Показать все";
    }
  });
}
function toggleClassAndChangeButtonDevices1439() {
  hiddenDevicesSlides1439.forEach(function (element) {
    if (element.classList.contains('devices__slide_hidden-1439')) {
      element.classList.remove('devices__slide_hidden-1439');
      buttonDevices.innerHTML = "Скрыть";
    } else {
      element.classList.add('devices__slide_hidden-1439');
      buttonDevices.innerHTML = "Показать все";
    }
  });
}
buttonDevices.addEventListener('click', toggleClassAndChangeButtonDevices767);
buttonDevices.addEventListener('click', toggleClassAndChangeButtonDevices1439);
const feedbackButtons = document.querySelectorAll('.feedback');
const closeButton = document.querySelector(".popup__close");
const popup = document.querySelector('.popup');
function togglePopup() {
  popup.classList.toggle('popup_open');
}
feedbackButtons.forEach(function (button) {
  button.addEventListener('click', togglePopup);
});
closeButton.addEventListener('click', togglePopup);
const callButtons = document.querySelectorAll('.call');
const closeCallButton = document.querySelector(".popup-call__close");
const popupCall = document.querySelector('.popup-call');
function togglePopupCall() {
  popupCall.classList.toggle('popup-call_open');
}
callButtons.forEach(function (button) {
  button.addEventListener('click', togglePopupCall);
});
closeCallButton.addEventListener('click', togglePopupCall);


// import Swiper and modules styles



let swiper = null;
function initializeSwiper() {
  swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination]
  });
}
function disableSwiperIfScreenIsWide() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 767) {
    if (swiper && swiper.destroy) {
      swiper.destroy();
      swiper = null;
    }
  } else {
    if (!swiper) {
      initializeSwiper();
    }
  }
}
window.addEventListener('load', disableSwiperIfScreenIsWide);
window.addEventListener('resize', disableSwiperIfScreenIsWide);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.svg */ "./img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/pic.png */ "./img/pic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/lenovo.png */ "./img/lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/samsung.png */ "./img/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple.png */ "./img/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/viewsonic.png */ "./img/viewsonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bosh.png */ "./img/bosh.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hp.png */ "./img/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/acer.png */ "./img/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sony.png */ "./img/sony.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\" />\n    <title>CPS Ремонт техники</title>\n  </head>\n  <body>\n    <div class=\"page\">\n      \n      <header class=\"header\">\n        <button class=\"btn-icon header__icon\"></button>\n        <div class=\"divider header__divider header__divider_hidden\"></div>\n        <img class=\"header__logo logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"CPS\" />\n        <button class=\"btn-icon header__icon header__icon_hidden call\"></button>\n        <button class=\"btn-icon header__icon header__icon_hidden feedback\"></button>\n        <button class=\"btn-icon header__icon header__icon_hidden\"></button>\n        <div class=\"divider header__divider\"></div>\n        <button class=\"btn-icon header__icon\"></button>\n        <button class=\"btn-icon header__icon\"></button>\n\n        <aside class=\"aside\">\n          <button class=\"aside__icon btn-icon\"></button>\n\n          <div class=\"wrapper\">\n            <nav class=\"menu\">\n              <button class=\"menu__btn\">\n                Услуги и сервисы\n              </button>\n              <button class=\"menu__btn\">Корпоративным клиентам</button>\n              <button class=\"menu__btn\">Продавцам техники</button>\n              <button class=\"menu__btn\">Партнерам</button>\n              <button class=\"menu__btn\">Производителям</button>\n              <button class=\"menu__btn\">Наши сервисные центры</button>\n              <button class=\"menu__btn\">Контакты</button>\n            </nav>\n\n            <div class=\"bottom\">\n              <div class=\"contact\">\n                <button class=\"contact__icon btn-icon call\"></button>\n                <button class=\"contact__icon btn-icon feedback\" ></button>\n                <button class=\"contact__icon btn-icon\"></button>\n\n                <p class=\"contact__mail\">mail@cps.com</p>\n                <p class=\"contact__number\">8 800 890 8900</p>\n              </div>\n\n              <div class=\"lang\">\n                <button class=\"lang__btn\">RU</button>\n                <button class=\"lang__btn\">EN</button>\n                <button class=\"lang__btn\">CH</button>\n              </div>\n            </div>\n          </div>\n        </aside>\n        <div class=\"cover\"></div>\n        \n      </header>\n\n      <main class=\"main\">\n        <div class=\"heading\">\n          <h1 class=\"heading__item title\">Услуги и сервисы</h1>\n          <p class=\"heading__item\">\n            <a class=\"link\" href=\"#\">Оставить заявку</a>\n          </p>\n          <button class=\"heading__item btn-icon\"></button>\n          <p class=\"heading__item\">\n            <a class=\"link\" href=\"#\">Статус ремонта</a>\n          </p>\n          <button class=\"heading__item btn-icon\"></button>\n        </div>\n\n        <nav class=\"slide-menu\">\n          <button class=\"slide-menu__btn slide-menu__btn_active\">\n            Ремонтируемые устройства\n          </button>\n          <button class=\"slide-menu__btn\">Ремонтируемые бренды</button>\n          <button class=\"slide-menu__btn\">Цены на услуги</button>\n          <button class=\"slide-menu__btn\">Адреса сервисных центров</button>\n          <button class=\"slide-menu__btn\">Специальные цены</button>\n          <button class=\"slide-menu__btn\">Отзывы</button>\n        </nav>\n        \n        <section class=\"content\">\n          <article class=\"content__reading\">\n            <p class=\"content__text text\">\n              Мы являемся авторизованным сервисным центром по ремонту техники\n            Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с\n            официальной гарантией производителя.\n            <br>\n            <br>\n\n            Мы успешно работаем с 1992 года и заслужили репутацию надежного\n            партнера, что подтверждает большое количество постоянных клиентов.\n            Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою\n            очередь, советуют нас родным и близким.\n            <br>\n            <br>\n\n            Наша команда профессиональных техников гарантирует качественный ремонт вашей\n            техники в кратчайшие сроки. Мы предлагаем широкий спектр услуг по ремонту различных\n            брендов и устройств. Более двадцати лет успешной работы на рунке гарантирует нам\n            безупречную репутацию и доверие клиентов.\n            </p>\n            <button class=\"content__read-more button-more\">Читать далее</button>\n          </article>\n\n          <img class=\"content__picture\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"picture\" />\n        </section>\n\n        <section class=\"brands\">\n          <div class=\"brands__header second-header\">\n            <h2 class=\"brands__title second-title\">\n              Ремонт техники различных брендов\n            </h2>\n          </div>\n\n          <div class=\"container swiper\">\n            <ul class=\"slide-wrapper swiper-wrapper\">\n              <li class=\"slide swiper-slide\">\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"lenovo\" />\n                <button class=\"slide__link btn-icon\"></button>\n              </li>\n\n              <li class=\"slide swiper-slide\">\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"samsung\" />\n                <button class=\"slide__link btn-icon\"></button>\n              </li>\n\n              <li class=\"slide swiper-slide\">\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"apple\" />\n                <button class=\"slide__link btn-icon\"></button>\n              </li>\n\n              <li class=\"slide swiper-slide\">\n                <img\n                  class=\"slide__brand\"\n                  src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\n                  alt=\"viewsonic\"\n                />\n                <button class=\"slide__link btn-icon\"></button>\n              </li>\n\n              <li class=\"slide swiper-slide\">\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"bosh\" />\n                <button class=\"slide__link btn-icon\"></button>\n              </li>\n\n              <li class=\"slide swiper-slide\">\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"hp\" />\n                <button class=\"slide__link btn-icon\"></button>\n              </li>\n\n              <li class=\"slide slide_hidden-767 swiper-slide\">\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"acer\" />\n                <button class=\"slide__link btn-icon\"></button>\n              </li>\n\n              <li class=\"slide slide_hidden-767 swiper-slide\">\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"sony\" />\n                <button class=\"slide__link btn-icon\"></button>\n              </li>\n\n              <li class=\"slide slide_hidden-767 slide_hidden-1439 swiper-slide\">\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"lenovo\" />\n                <button class=\"slide__link btn-icon\"></button>\n              </li>\n\n              <li class=\"slide slide_hidden-767 slide_hidden-1439 swiper-slide\">\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"samsung\" />\n                <button class=\"slide__link btn-icon\"></button>\n              </li>\n\n              <li class=\"slide slide_hidden-767 slide_hidden-1439 swiper-slide\">\n                <img class=\"slide__brand\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"apple\" />\n                <button class=\"slide__link btn-icon\"></button>\n              </li>\n            </ul>\n            <div class=\"swiper-pagination\"></div>\n            <button class=\"button-more btn btn_hidden\">Показать все</button>\n          </div>\n        </section>\n\n        <section class=\"devices\">\n          <div class=\"devices__header second-header\">\n            <h2 class=\"devices__title second-title\">\n              Ремонт различных видов техники\n            </h2>\n          </div>\n\n          <div class=\"devices__container container swiper\">\n            <ul class=\"devices__wrapper slide-wrapper swiper-wrapper\">\n              <li class=\"devices__slide swiper-slide\">\n                <p class=\"devices__device\">Ремонт ноутбуков</p>\n                <button class=\"devices__link btn-icon\"></button>\n              </li>\n              <li class=\"devices__slide swiper-slide\">\n                <p class=\"devices__device\">Ремонт планшетов</p>\n                <button class=\"devices__link btn-icon\"></button>\n              </li>\n              <li class=\"devices__slide swiper-slide\">\n                <p class=\"devices__device\">Ремонт ПК</p>\n                <button class=\"devices__link btn-icon\"></button>\n              </li>\n              <li class=\"devices__slide swiper-slide devices__slide_hidden-767\">\n                <p class=\"devices__device\">Ремонт мониторов</p>\n                <button class=\"devices__link btn-icon\"></button>\n              </li>\n              <li\n                class=\"devices__slide swiper-slide devices__slide_hidden-767 devices__slide_hidden-1439\"\n              >\n                <p class=\"devices__device\">Ремонт смартфонов</p>\n                <button class=\"devices__link btn-icon\"></button>\n              </li>\n            </ul>\n            <div class=\"swiper-pagination\"></div>\n            <button class=\"button-more btn-devices btn-devices_hidden\">\n              Показать все\n            </button>\n          </div>\n        </section>\n\n        <section class=\"prices\">\n          <div class=\"prices__header second-header\">\n            <h2 class=\"prices__title second-title\">Цены на услуги</h2>\n          </div>\n\n          <div class=\"prices__container container swiper\">\n            <ul class=\"prices__wrapper slide-wrapper swiper-wrapper\">\n              <li class=\"prices__slide swiper-slide\">\n                <p class=\"prices__content\">Ремонтные услуги</p>\n                <p class=\"prices__content\">Диагностика</p>\n                <p class=\"prices__content\">Цена</p>\n                <p class=\"prices__content\">Бесплатно</p>\n                <p class=\"prices__content\">Срок</p>\n                <p class=\"prices__content\">30 мин</p>\n                <button class=\"prices__button btn-order\">заказать</button>\n              </li>\n              <li class=\"prices__slide swiper-slide\">\n                <p class=\"prices__content\">Ремонтные услуги</p>\n                <p class=\"prices__content\">Замена дисплея</p>\n                <p class=\"prices__content\">Цена</p>\n                <p class=\"prices__content\">1000 ₽</p>\n                <p class=\"prices__content\">Срок</p>\n                <p class=\"prices__content\">30-120 мин</p>\n                <button class=\"prices__button btn-order\">заказать</button>\n              </li>\n              <li class=\"prices__slide swiper-slide\">\n                <p class=\"prices__content\">Ремонтные услуги</p>\n                <p class=\"prices__content\">Замена полифонического динамика</p>\n                <p class=\"prices__content\">Цена</p>\n                <p class=\"prices__content\">1000 ₽</p>\n                <p class=\"prices__content\">Срок</p>\n                <p class=\"prices__content\">30-120 мин</p>\n                <button class=\"prices__button btn-order\">заказать</button>\n              </li>\n              <li class=\"prices__slide swiper-slide\">\n                <p class=\"prices__content\">Ремонтные услуги</p>\n                <p class=\"prices__content\">\n                  Тестирование с выдачей технического заключения\n                </p>\n                <p class=\"prices__content\">Цена</p>\n                <p class=\"prices__content\">1000 ₽</p>\n                <p class=\"prices__content\">Срок</p>\n                <p class=\"prices__content\">30-120 мин</p>\n                <button class=\"prices__button btn-order\">заказать</button>\n              </li>\n              <li class=\"prices__slide swiper-slide\">\n                <p class=\"prices__content\">Ремонтные услуги</p>\n                <p class=\"prices__content\">Замена программного обеспечения</p>\n                <p class=\"prices__content\">Цена</p>\n                <p class=\"prices__content\">1000 ₽</p>\n                <p class=\"prices__content\">Срок</p>\n                <p class=\"prices__content\">30-120 мин</p>\n                <button class=\"prices__button btn-order\">заказать</button>\n              </li>\n            </ul>\n\n            <div class=\"swiper-pagination\"></div>\n          </div>\n\n          <div class=\"prices__table\">\n            <div class=\"table\">\n              <table>\n                <tr>\n                  <th>Ремонтные услуги</th>\n                  <th>Цена</th>\n                  <th>Срок</th>\n                  <th></th>\n                </tr>\n\n                <tr>\n                  <td>Диагностика</td>\n                  <td>Бесплатно</td>\n                  <td>30 минут</td>\n                  <td>\n                    <button class=\"table__button btn-order\">заказать</button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Замена дисплея</td>\n                  <td>1000 ₽</td>\n                  <td>30-120 мин</td>\n                  <td>\n                    <button class=\"table__button btn-order\">заказать</button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Замена полифонического динамика</td>\n                  <td>1000 ₽</td>\n                  <td>30-120 мин</td>\n                  <td>\n                    <button class=\"table__button btn-order\">заказать</button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Тестирование с выдачей технического заключения</td>\n                  <td>1000 ₽</td>\n                  <td>30-120 мин</td>\n                  <td>\n                    <button class=\"table__button btn-order\">заказать</button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Замена программного обеспечения</td>\n                  <td>1000 ₽</td>\n                  <td>30-120 мин</td>\n                  <td>\n                    <button class=\"table__button btn-order\">заказать</button>\n                  </td>\n                </tr>\n              </table>\n            </div>\n          </div>\n\n          <p class=\"prices__line\">\n            Все цены указаны с учетом НДС. Стоимость ремонта указана на\n            единичную услугу. Для получения коммерческого предложения на\n            постоянное обслуживание, оставьте заявку.\n          </p>\n          <p class=\"prices__link\">\n            <a href=\"#\">Получить коммерческое предложение</a>\n          </p>\n        </section>\n\n        \n        <footer>\n          <div class=\"footer\">\n            <p class=\"footer__string\">\n              © 2019 CPS<br />Разработано командой Apesong\n            </p>\n            <p class=\"footer__string\">Политика конфиденциальности</p>\n            <p class=\"footer__string\">\n              Информация, размещенная на данной странице, не является публичной\n              офертой\n            </p>\n          </div>\n        </footer>\n      </main>\n      \n    </div>\n    \n    <div class=\"popup\">\n      <div class=\"popup__body\">\n        <aside class=\"popup__content\">\n          <button class=\"btn-icon popup__close\" href=\"\"></button>\n          <h1 class=\"popup__title title\">Обратная связь</h1>\n          <input class=\"popup__input\" type=\"text\" placeholder=\"Имя\" name=\"username\"/>\n          <input class=\"popup__input\" type=\"text\" placeholder=\"Телефон\" name=\"usermobile\"/>\n          <input class=\"popup__input\" type=\"text\" placeholder=\"Электронная почта\" name=\"useremail\"/>\n          <textarea class=\"popup__input\" type=\"text\" placeholder=\"Сообщение\" name=\"usermessage\"></textarea>\n          <p class=\"popup__text\">\n            Нажимая “отправить”, вы даете согласие на <a class=\"popup__link\" href=\"\">обработку персональных\n            данных</a> и соглашаетесь с нашей <a class=\"popup__link\" href=\"\">политикой конфиденциальности</a>\n          </p>\n          <button class=\"popup__button btn-order\">отправить</button>\n        </aside>\n      </div>\n    </div>\n    \n    <div class=\"popup popup-call\">\n      <div class=\"popup__body\">\n        <aside class=\"popup__content\">\n          <button class=\"btn-icon popup__close popup-call__close\" href=\"\"></button>\n          <h1 class=\"popup__title title\">Заказать звонок</h1>\n          <input class=\"popup__input\" type=\"text\" placeholder=\"Телефон\" name=\"usermobile\"/>\n          \n          <p class=\"popup__text\">\n            Нажимая “отправить”, вы даете согласие на <a class=\"popup__link\" href=\"\">обработку персональных\n            данных</a> и соглашаетесь с нашей <a class=\"popup__link\" href=\"\">политикой конфиденциальности</a>\n          </p>\n          <button class=\"popup__button btn-order\">отправить</button>\n        </aside>\n      </div>\n    </div>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/acer.png":
/*!**********************!*\
  !*** ./img/acer.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/acer.png";

/***/ }),

/***/ "./img/apple.png":
/*!***********************!*\
  !*** ./img/apple.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/apple.png";

/***/ }),

/***/ "./img/bosh.png":
/*!**********************!*\
  !*** ./img/bosh.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bosh.png";

/***/ }),

/***/ "./img/hp.png":
/*!********************!*\
  !*** ./img/hp.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/hp.png";

/***/ }),

/***/ "./img/lenovo.png":
/*!************************!*\
  !*** ./img/lenovo.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/lenovo.png";

/***/ }),

/***/ "./img/logo.svg":
/*!**********************!*\
  !*** ./img/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./img/pic.png":
/*!*********************!*\
  !*** ./img/pic.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pic.png";

/***/ }),

/***/ "./img/samsung.png":
/*!*************************!*\
  !*** ./img/samsung.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/samsung.png";

/***/ }),

/***/ "./img/sony.png":
/*!**********************!*\
  !*** ./img/sony.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sony.png";

/***/ }),

/***/ "./img/viewsonic.png":
/*!***************************!*\
  !*** ./img/viewsonic.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/viewsonic.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-709223"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
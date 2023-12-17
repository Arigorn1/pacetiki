
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
const cover = document.querySelector('.cover')

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
const closeButton=document.querySelector(".popup__close")
const popup = document.querySelector('.popup');


function togglePopup() {
   
  popup.classList.toggle('popup_open');

 }


 feedbackButtons.forEach(function (button) {
  button.addEventListener('click', togglePopup);
});
 closeButton.addEventListener('click', togglePopup);



const callButtons = document.querySelectorAll('.call');
const closeCallButton=document.querySelector(".popup-call__close")
const popupCall = document.querySelector('.popup-call');

function togglePopupCall() {
   
  popupCall.classList.toggle('popup-call_open');

 }


 callButtons.forEach(function (button) {
  button.addEventListener('click', togglePopupCall);
});
closeCallButton.addEventListener('click', togglePopupCall);


import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



let swiper = null; 

function initializeSwiper() {
  swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    modules: [Navigation, Pagination],
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


import '../styles/index.scss';

// Swiper slider imports
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


window.addEventListener("load", function() {
    setTimeout(() => {
        document.querySelector('body').style.opacity = 1;
    }, 500);
});


new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Scroll to Progress section
const elem = document.querySelector('.progress');
const progressItems = document.getElementsByClassName('js-progress-item');

document.addEventListener('scroll', function() {
  const posTop = elem.getBoundingClientRect().top;

  if(posTop + elem.clientHeight <= window.innerHeight && posTop >= 0) {
    [...progressItems].forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('active');
      }, 500 + (i * 500));
    });
  }
});
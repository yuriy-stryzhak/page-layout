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

//Sending form

const form = document.querySelector('.js-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('input[name=name]').value;
  const phone = document.querySelector('input[name=phone]').value;
  const mail = document.querySelector('input[name=mail]').value;
  const range = document.querySelector('input[type=range]').value;

  alert(
      `You are submitting a form with this data:
      Name: ${name},
      Phone: ${phone},
      Mail: ${mail},
      Range: ${range}`
  );
});
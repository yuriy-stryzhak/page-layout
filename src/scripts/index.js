import '../styles/index.scss';

// Swiper slider imports
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


window.addEventListener("load", function() {
    setTimeout(() => {
        document.querySelector('body').style.opacity = 1;
    }, 500);
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  console.log(swiper);
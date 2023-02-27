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

function sendData( data ) {
  console.log( 'Sending data' );

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

  XHR.open( 'POST', '/form-sending' );

  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4) {
        if (XHR.status === 200) {
          console.log("Success", XHR.responseText, XHR.statusText);
        } else {
          console.log("Error.", XHR.statusText);
        }
    }
};

  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  XHR.send( urlEncodedData );
}


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('input[name=name]').value;
  const phone = document.querySelector('input[name=phone]').value;
  const mail = document.querySelector('input[name=mail]').value;
  const range = document.querySelector('input[type=range]').value;

  sendData({
    name,
    phone,
    mail,
    range
  });
});
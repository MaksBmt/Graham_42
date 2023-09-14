// import * as flsFunctions from "./modules/functions.js";
// // import * as headerMobile from "./modules/headerMobile.js";
// import { testEvt } from "./modules/headerMobile.js";
// import TestView from "./modules/testView.js";

// flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

// headerMobile.testEvt(event);
// testEvt()
// const click = new TestView();
// click.testEvent();

///**********************======================== */


// ? ---------------------------------------------------------
import OpenMenu from "./openMenu.js";
import OpenPopup from "./openPopup.js";
import { correctPaddingTop } from "./modules/functions.js"
import JSShare from "js-share";
import anime from 'animejs/lib/anime.es.js';


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

const shareItems = document.querySelectorAll('.widget__link');
for (var i = 0; i < shareItems.length; i += 1) {
  shareItems[i].addEventListener('click', function share(e) {
    return JSShare.go(this);
  });
}

if (document.querySelector('.nav') !== null) {
  const nav = document.querySelector('.nav');

  const toggleNav = new OpenMenu(nav, 'nav__button', 'nav--closed', 'nav--opened');
  toggleNav.toggle();
}

if (document.querySelector('.popup') !== null) {
  const popup = document.querySelector('.popup');
  const togglePopup = new OpenPopup(popup, 'popup__close', 'popup__show');
  document.querySelector('.link__popup').addEventListener('click', (evt) => {
    evt.preventDefault();
    togglePopup.setPopup();
    togglePopup.setOverlay();
    togglePopup.setClosePopupTimeOut(3000)
  });
}

// correctMarginMain()
correctPaddingTop('.promo');

if (document.querySelector('header') !== null) {
  const header = document.querySelector('header')
  window.addEventListener('scroll', () => {
    let scroled = window.scrollY;
    let isScrollClass = header.classList.contains('header__scroll');

    if (!isScrollClass && scroled > 50) {
      header.classList.add('header__scroll');
    }
    if (scroled < 50 && isScrollClass) {
      header.classList.remove('header__scroll');
    }
  });
}

//! ===== =====================  anime.js =====================
const phone = {
  price: 0,
  maxPrice: 3000,
}
const input = document.querySelector('[name=input1]');

// anime({
//   targets: input,
//   value: [0, 1000],
//   round: 1,
//   easing: 'easeInOutExpo'
// });

// anime({
//   targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
//   points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
//   baseFrequency: 0,
//   scale: 1,
//   loop: true,
//   direction: 'alternate',
//   easing: 'easeInOutExpo'
// });

// document.querySelector('.btn').addEventListener('click', () => {
//   anime({
//     // targets: ['.range', phone],
//     targets: ['.el1', '.el2', '.el3', phone],
//     // loop: true,
//     // loop: 3,
//     // backgroundColor: {
//     //   value: 'rgb(157, 42, 42)',
//     //   duration: 2000,  //*задержка только для bgc
//     // },
//     // translateX: 250,
//     // translateX: [
//     //   { value: 250, duration: 1000, delay: 500 },
//     //   { value: 0, duration: 1000, delay: 500 }
//     // ],

//     price: 20000,
//     round: 10,
//     // delay: 500, //* задержка
//     // delay: function (el, i, l) { return i * 300; },
//     // delay: anime.stagger(300),
//     duration: 2000, //* время выполнения
//     // rotate: 45,
//     // rotate: function (el, i, l) {
//     //   return 10 * i;
//     // },
//     // rotate: anime.stagger('1turn'),
//     // rotate: { value: '+= 1turn' },
//     easing: 'easeInCubic', //*кривая выполнения
//     // endDelay: 500,
//     // direction: 'alternate',

//     update: () => {
//       document.querySelector('.result').textContent = phone.price;
//     },
//     width: '100%', // -> from 'что задано' to '100%',
//   });
// });

document.querySelector('.btn').addEventListener('click', () => {
  // anime({
  //   targets: ['.range', phone],
  //   duration: 2000, //* время выполнения
  //   price: 2000,
  //   easing: 'easeInCubic', //*кривая выполнения
  //   // width: '100%',
  //   update: () => {
  //     // document.querySelector('.range').style.Width = phone.price / document.querySelector('.control').offsetWidth;
  //     document.querySelector('.range').style.width = ((document.querySelector('.control').offsetWidth / phone.maxPrice) * phone.price) + 'px';

  //   },

  // });

  anime({
    targets: '.first path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 5500,
    // delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
});

// document.querySelector('.ceil').addEventListener('click', () => {
//   anime({
//     targets: '.cub',
//     scale: [
//       { value: .1, easing: 'easeOutSine', duration: 500 },
//       { value: 1, easing: 'easeInOutQuad', duration: 1200 }
//     ],
//     delay: anime.stagger(200, { grid: [14, 5], from: 'center' })
//   });
// })




// if (document.querySelector('.process__list') !== null) {
//   const parentElement = document.querySelector('.process__list');
//   const list = parentElement.querySelectorAll('.process__item');

//   //можно ли создать блок после элемента
//   const widthParentElement = parentElement.offsetWidth;

//   const widthItem = list[0].offsetWidth;
//   const leftItem = list[1].offsetLeft;
//   const rightItem = widthParentElement - widthItem - leftItem;
//   if (rightItem > widthItem) {
//     console.log('ok')
//   }

//   function setAllTopItems(list) {
//     const resultArr = [];
//     const resultObj = {};
//     Array.from(list).map((item) => {
//       resultArr.push(item.offsetTop)
//     });
//     const resultSet = new Set(resultArr);


//     resultSet.forEach((i, index) => {

//       resultObj[resultSet[index]] = (Array.from(list).filter(top => top.offsetTop === i).length);
//       // resultObj.i = index
//     });

//     return resultObj;
//   }

//   console.log(setAllTopItems(list));

// }



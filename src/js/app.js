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
import { gsap } from "gsap";


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

//! ====== GSAP =================

const showMyObj = (selector, obj) => {
  const el = document.querySelector(selector);
  el.innerHTML = JSON.stringify({
    subscr: Math.ceil(obj.subscr),
    sponsor: Math.ceil(obj.sponsor),
    delta: obj.delta,
    color: obj.color,
  }, null, ' ');
}

const myObj = {
  subscr: 1000,
  sponsor: 42,
  delta: .5,
  color: '#123456',
}

// gsap.to(myObj, {
//   subscr: 7000,
//   sponsor: 588,
//   delta: .5,
//   color: '#654321',
//   duration: 7,
//   delay: 0.5,
//   onUpdate: function () { showMyObj('.box', myObj) }
// });

//! === createElement =========
const main = document.querySelector('main');
const section = document.createElement('section');
section.className = 'create';

const row = document.createElement('div');
row.className = 'row';

const box = document.createElement('div');
box.className = 'box';

main.appendChild(section);
section.appendChild(row);
row.appendChild(box);

gsap.to('.box', {
  x: 350,
  rotate: 180,
  delay: 0.5,
  duration: 7,
  ease: "back.out(1.7)",
});

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



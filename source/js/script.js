'use strict';

const body = document.querySelector('.page__body');
const navMain = body.querySelector('.nav');
const navToggle = body.querySelector('.nav__toggle');
const navLinks = body.querySelectorAll('.nav__link');
const headerMain = body.querySelector('.page-header__main');
const pageMain = body.querySelector('.page-main');
const pageFooter = body.querySelector('.page-footer');
const header = body.querySelector('.page-header');
const form = body.querySelector('.form');
const userName = document.querySelector('[name=username]');
const userTel = document.querySelector('[name=tel]');

navMain.classList.remove('nav--nojs');
header.classList.remove('page-header--nojs');

let isStorageSupport = true;
let storageName = '';
let storageTel = '';
try {
  storageName = localStorage.getItem('username');
  storageTel = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

if (storageName) {
  userName.value = storageName;
}
if (storageTel) {
  userTel.value = storageTel;
}

if (form) {
  form.addEventListener('submit', () => {
    if (isStorageSupport) {
      if (userTel.value) {
        localStorage.setItem('tel', userTel.value);
      }
      if (userName.value) {
        localStorage.setItem('name', userName.value);
      }
    }
  });
}

const navSvitches = () => {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    pageMain.classList.remove('not-available');
    pageFooter.classList.remove('not-available');
    headerMain.classList.remove('not-available');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    pageMain.classList.add('not-available');
    pageFooter.classList.add('not-available');
    headerMain.classList.add('not-available');
  }
};

navToggle.addEventListener('click', navSvitches);
navLinks.forEach(link => {
  link.addEventListener('click', navSvitches);
});

'use strict'

const items = document.querySelectorAll('.FAQ-accardion__item');
const arrItems = Array.from(items);
arrItems.forEach(el=>el.addEventListener('click', ()=>{
    el.classList.toggle('active');
}))

const nav = document.querySelector('.header-navigation__list');
const navLinks = nav.getElementsByTagName('li');
const arrLinks = Array.from(navLinks);
arrLinks.forEach(el=>el.addEventListener('mouseenter', ()=>{
    el.classList.add('active');
}))
arrLinks.forEach(el=>el.addEventListener('mouseleave', ()=>{
    el.classList.remove('active');
}))
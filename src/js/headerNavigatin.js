import * as variables from './listIcons.js';

const servicesNavigation = document.querySelector('.services-list');
const servicesLinks = servicesNavigation.getElementsByTagName('li');
const arrServicesLinks = Array.from(servicesLinks);

arrServicesLinks.forEach((el,i) => el.addEventListener('click', () => {
    const pageTitle = document.querySelector('.page-title');
    const pageIcon = document.querySelector('.page-icon');
    pageTitle.innerHTML = el.innerHTML;
    pageIcon.style.background = `url(${variables.servicesIcons[i]}) center no-repeat`;
}))

const technologiesNavigation = document.querySelector('.technologies-list');
const technologiesLinks = technologiesNavigation.getElementsByTagName('li');
const arrTechnologiesLinks = Array.from(technologiesLinks);

arrTechnologiesLinks.forEach((el,i) => el.addEventListener('click', () => {
    const pageTitle = document.querySelector('.page-title');
    const pageIcon = document.querySelector('.page-icon');
    pageTitle.innerHTML = el.innerHTML;
    pageIcon.style.background = `url(${variables.technologiesIcons[i]}) center no-repeat`;
}));


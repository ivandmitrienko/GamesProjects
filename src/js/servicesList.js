// import { servicesIcon } from './servicesIcon.js'
const servicesNavigation = document.querySelector('.services-list');
const servicesLinks = servicesNavigation.getElementsByTagName('li');
const arrServicesLinks = Array.from(servicesLinks);

arrServicesLinks.forEach((el,i) => el.addEventListener('click', () => {
    const pageTitle = document.querySelector('.page-title');
    const pageIcon = document.querySelector('.page-icon');
    pageTitle.innerHTML = el.innerHTML;
    pageIcon.style.background = `url(${servicesIcon[i]})`;

}))
import { pageTiTleAndIcon } from './pageTiTleAndIcon.js';

const headerNavigationList = document.querySelector('.header-navigation__list');
const aLinks = headerNavigationList.getElementsByTagName('a');
const arrLinks = Array.from(aLinks);
arrLinks.forEach(el=>el.addEventListener('click', ()=>{
    switch(el.innerHTML){
        case 'SERVICES':
            pageTiTleAndIcon();
            break;
        default:
            console.log('ddd')    
    }

}))

import "./main.scss";
import './fonts/fonts.scss';

// function component(text) {
//     const element = document.createElement('h1');
//     element.textContent = text;
//     return element;
//   }

//   document.body.prepend(component('Проект собран на Webpack'));

const raitings = document.querySelectorAll('.raiting');
if (raitings.length > 0) {
    for (let index = 0; index < raitings.length; index++) {
        setRaiting(raitings[index]);
    }
};

function setRaiting(raiting) {
    const raitingItems = raiting.querySelectorAll('.raiting__item');
    for (let index = 0; index < raitingItems.length; index++) {
        const raitingItem = raitingItems[index];
        console.log(raitingItem);
        raitingItem.addEventListener("mouseenter", () => {
            console.log('fff')
        })
            //  initRaiting(raiting);
            //  setRaitingActiveWidth(raitingItem.Value);
        // )


    }
}

// function initRaiting(raiting) {
//     const raitingVars = {
//         raitingValue: raiting.querySelector('.raiting__value'),
//         raitingActive: raiting.querySelector('.raiting__active'),
//     }
// }

// function setRaitingActiveWidth(raitingVars) {
//     const raitingActiveWidth = raitingVars.raitingValue.innerHTML / 0.05;
//     raitingVars.raitingActive.style.width = `${raitingActiveWidth}%`
// }
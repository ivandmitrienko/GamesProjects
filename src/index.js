import "./main.scss";
import './fonts/fonts.scss';
import './js/accardion.js';
import './js/headerNavigatin.js';

const raitings = document.querySelectorAll('.raiting-stars');
if (raitings.length > 0) {
    for (let index = 0; index < raitings.length; index++) {//? one raiting
        setRaiting(raitings[index]);
        setCurrentRaitingActiveValue(raitings[index]);
    }
};

function setRaiting(raiting) {
    const raitingAllItems = raiting.querySelector('.raiting-stars__items');
    raitingAllItems.addEventListener('click', () => setRaitingActiveValue(raiting));
    const elem = raitingAllItems.getBoundingClientRect();
    raitingAllItems.addEventListener('mouseenter', () => {
        raitingAllItems.addEventListener('mousemove', (EO) => {
            const activeWidth = EO.pageX - elem.left;
            setRaitingActiveWidth(activeWidth);
        });
    });
    raitingAllItems.addEventListener('mouseleave', () => {
        raitingAllItems.removeEventListener('mousemove', (EO) => {
            const activeWidth = EO.pageX - elem.left;
            setRaitingActiveWidth(activeWidth);
        });
        setCurrentRaitingActiveValue(raiting);
    })
}

function setRaitingActiveWidth(activeWidth) {
    const raitingActive = document.querySelector('.raiting-stars__active');
    raitingActive.style.width = `${activeWidth}px`;
}

function setRaitingActiveValue(raiting) {
    const raitingValue = raiting.querySelector('.raiting-stars__value');
    const raitingActive = raiting.querySelector('.raiting-stars__active');
    const activeWidth = parseInt(raitingActive.style.width);
    const newRaitingValue = `${(activeWidth * 100 / 125) * 0.05}`;
    raitingValue.innerHTML = Number(newRaitingValue).toFixed(1)
}

function setCurrentRaitingActiveValue(raiting) {
    const raitingValue = raiting.querySelector('.raiting-stars__value');
    const currentRaitingValue = Number(raitingValue.innerHTML);
    const activeWidth = (currentRaitingValue / 0.05) * 125 / 100;
    setRaitingActiveWidth(activeWidth);
}




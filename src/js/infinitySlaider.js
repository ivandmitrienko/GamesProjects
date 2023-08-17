const sliderWrapper = document.querySelector('.slaider__wrapper');
const btns = [...document.querySelectorAll('.shevron')];
const btn__next = btns[1];
const btn__prev = btns[0];
let autoSlider;

btn__next.addEventListener('click', () => {
    btnNext();
})

btn__next
    .addEventListener('mouseleave', () => {
        autoSlider = setInterval(() => {
            btnNext();
        }, 2100);
    })

btn__prev.
    addEventListener('mouseleave', () => {
        autoSlider = setInterval(() => {
            btnNext();
        }, 2100);
    })

btn__next
    .addEventListener('mouseenter', () => {
        clearInterval(autoSlider);
    })

btn__prev
    .addEventListener('mouseenter', () => {
        clearInterval(autoSlider);
    })

const btnNext = () => {
    const sliderItems = [...document.querySelectorAll('.recent-projects-item')];
    if (sliderItems.length === 3) {
        sliderWrapper.style.left = "0";
        const clone = sliderItems[0].cloneNode(true);
        sliderWrapper.appendChild(clone);
        sliderWrapper.style.transform = "translateX(-480px)";
    }
}

btn__prev.addEventListener('click', () => {
    const sliderItems = [...document.querySelectorAll('.recent-projects-item')];
    if (sliderItems.length === 3) {
        const newArr = sliderItems.map(el => el.cloneNode(true));
        const arrSliderItems = newArr.slice(0);
        sliderWrapper.innerHTML = '';
        sliderWrapper.style.left = "-480px";
        for (let i = 0; i < arrSliderItems.length; i++) {
            sliderWrapper.insertAdjacentHTML('beforeend', `${arrSliderItems[i].outerHTML}`);
        }
        const clone = sliderItems[2].cloneNode(true);
        sliderWrapper.insertBefore(clone, sliderWrapper.firstChild);
        sliderWrapper.style.transform = "translateX(480px)";
    }
})

sliderWrapper.addEventListener('transitionend', () => {
    const sliderItems = [...document.querySelectorAll('.recent-projects-item')];
    if (sliderWrapper.style.left === '0px') {
        const newArr = sliderItems.map(el => el.cloneNode(true));
        const arrSliderItems = newArr.slice(1);
        transitionSlider(arrSliderItems);
    } else {
        const newArr = sliderItems.map(el => el.cloneNode(true));
        const arrSliderItems = newArr.slice(0, 3);
        transitionSlider(arrSliderItems);
    }
})

const transitionSlider = (arrSliderItems) => {
    sliderWrapper.innerHTML = '';
    sliderWrapper.style.left = "0px";
    sliderWrapper.style.transition = 'none';
    sliderWrapper.style.transform = "translateX(0)";
    setTimeout(() => {
        sliderWrapper.style.transition = 'transform .8s ease-in'
    });
    for (let i = 0; i < arrSliderItems.length; i++) {
        sliderWrapper.insertAdjacentHTML('beforeend', `${arrSliderItems[i].outerHTML}`);
    }
}

autoSlider = setInterval(() => {
    btnNext();
}, 2100);



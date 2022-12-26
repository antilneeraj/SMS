
const children = [...document.querySelector('.nav').children].splice(0, 3);
const slider = document.querySelector('.nav').lastElementChild;
let selected;

selected.defineSetter(function (val) {
    slider.style.height = val.getBoundingClientRect().height+'px';
    slider.style.width = val.getBoundingClientRect().width+'px';
    slider.style.left = val.getBoundingClientRect().left-slider.getBoundingClientRect().left+'px';
})

selected = children[0];

children.forEach(child => child.addEventListener('click', e=>selected=child))
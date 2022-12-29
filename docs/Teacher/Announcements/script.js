window.addEventListener('load', e => {
    const children = [...document.querySelector('.nav').children].splice(1, 3);
    const slider = document.querySelector('.nav').firstElementChild;

    children.forEach(child => child.addEventListener('click', function (e) {
        slider.style.height = child.getBoundingClientRect().height + 'px';
        slider.style.width = child.getBoundingClientRect().width + 'px';
        let width = 0;
        ([...children].splice(0, children.indexOf(child)).forEach(child => width+=child.getBoundingClientRect().width))
        slider.style.marginLeft = width + 'px';
    }))

// Aligning Add Button

    const add = document.querySelector('#add');
    add.style.marginTop = add.parentElement.getBoundingClientRect().height - add.getBoundingClientRect().height - 10 + 'px'

    add.style.marginLeft = add.parentElement.getBoundingClientRect().width - add.getBoundingClientRect().width - 10 + 'px';
})
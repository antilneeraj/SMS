const student = document.querySelector('.rectangle2');
const teacher = document.querySelector('.rectangle1');
const lights = [...document.querySelectorAll('.light')];
const base = {height: 405, width: 365}

const getStyle = (elem, prop) => Number(getComputedStyle(elem)[prop].replace('px', ''));
[teacher, student].forEach(elem => 
  elem.addEventListener('click', e => {
    if(!elem.clicked){
      const altElem = (elem===teacher?student:teacher);
      ['height', 'width'].forEach(dimen => {
        elem.style[dimen] = `${base[dimen] + 200}px`;
        altElem.style[dimen] = `${base[dimen] - 50}px`;
        elem.children[2].style.scale = 0;
        elem.children[1].style.scale = .4;
        altElem.children[2].style.scale = .6;
        altElem.children[1].style.scale = .6;
      })
      elem.clicked=true;
      altElem.clicked=false;
      altElem.children[2].innerHTML = (elem===teacher?'Student':'Teacher');
    }
  })
)

document.addEventListener('mousemove', e => {
  lights.forEach(light => {
    light.style.display = 'block';
    light.style.left = `${e.clientX - light.parentElement.getBoundingClientRect().left}px`;
    light.style.top = `${e.clientY - light.parentElement.getBoundingClientRect().top}px`;
  })
})
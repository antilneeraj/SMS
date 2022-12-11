const student = document.querySelector('.rectangle2');
const teacher = document.querySelector('.rectangle1');
const lights = [...document.querySelectorAll('.light')];
const base = {height: 405, width: 365}

const getStyle = (elem, prop) => Number(getComputedStyle(elem)[prop].replace('px', ''));
[teacher, student].forEach(elem => 
  elem.addEventListener('click', e => {
    if(!elem.clicked){
      const altElem = (elem===teacher?student:teacher);
      altElem.form?.remove();
      ['height', 'width'].forEach(dimen => {
        elem.style[dimen] = `${base[dimen] + 200}px`;
        altElem.style[dimen] = `${base[dimen] - 50}px`;
        altElem.style[`margin${altElem===student?'Left':'Right'}`] = `-150px`;
        elem.style[`margin${altElem===student?'Right':'Left'}`] = 0;
        altElem.style.transform = `perspective(300px) rotatey(${altElem===student?'-':''}35deg)`;
        elem.style.transform = '';
        elem.parentElement.style.zIndex = '10';
        altElem.parentElement.style.zIndex = '5';
        elem.children[2].style.scale = 0;
        elem.children[1].style.scale = .4;
        altElem.children[2].style.scale = .6;
        altElem.children[1].style.scale = .6;
      })

      const form = document.createElement('form');
      form.classList.add('form');

      if(elem===student){
        const roll = document.createElement('input');
        roll.type='number';
        roll.placeholder="Roll Number"

        const date = document.createElement('input');
        date.type='date';

        roll.classList.add('input', 'roll');
        date.classList.add('input', 'date');

        form.append(roll, date);
      }else{
        const uid = document.createElement('input');
        uid.type='text';
        uid.placeholder='User ID';

        const password = document.createElement('input');
        password.type='password';
        password.placeholder='Password';

        uid.classList.add('input');
        password.classList.add('input');

        form.append(uid, password);
      }

      const submitParent = document.createElement('button');
      submitParent.classList.add('button');
      submitParent.innerHTML = `
        <div class="btn">
          <div class="text">Login</div>
          <div class="arrow">&rightarrow;</div>
        </div>
      `;

      form.append(submitParent)


      elem.append(form);
      elem.form=form;
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
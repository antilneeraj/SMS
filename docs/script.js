const student = document.querySelector('.rectangle2');
const teacher = document.querySelector('.rectangle1');
const lights = [...document.querySelectorAll('.light')];
const base = {height: 405, width: 365};

function input(name, type, placeholder, ...classList){
  const input = document.createElement('input');
  input.name=name;
  input.type=type;
  input.placeholder=placeholder;
  input.classList.add(...classList)
  
  return input
}

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
        altElem.children[2].style.scale = altElem.children[1].style.scale = .6;
      })

      const form = document.createElement('form');
      form.classList.add('form');

      let input1, input2;
      if(elem===student){
        input1 = input('number', 'roll', 'Roll Number', 'input', 'roll');
        input2 = input('date', 'date', '', 'input', 'date');
      }else{
        input1 = input('text', 'uid', 'User ID', 'input');
        input2 = input('password', 'password', 'Password', 'input');
      }

      form.append(input1, input2);

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

document.addEventListener('mousemove', e => 
  lights.forEach(light => {
    light.style.display = 'block';
    ['left', 'top'].forEach(dimen => light.style[dimen] = `${e[`client${dimen==='left'?'X':'Y'}`] - light.parentElement.getBoundingClientRect()[dimen]}px`)
  })
)


const params = new URL(window.location).searchParams;
if(params.get('user')==='teacher' && !teacher.click())
  ['uid', 'password'].forEach(param => {
    const elem = [...teacher.querySelectorAll('*')].filter(elem => elem.name===param)[0];
    elem.value=params.get(param) ?? '';
  })
else if(params.get('user')==='student' && !student.click())
  ['roll', 'date'].forEach(param => {
    const elem = [...student.querySelectorAll('*')].filter(elem => elem.name===param)[0];
    elem.value=(param==='roll'?params.get(param)??'':params.get('date')?`${params.get('date').slice(4, 8)}-${params.get('date').slice(2, 4)}-${params.get('date').slice(0, 2)}`:'');
  })
function pointCreator(){
    const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    point.setAttribute('r', '3');
    point.setAttribute('stroke', 'lightgray');
    point.addEventListener('mouseover', e => {
        if(point.label){
            const r = point.getBoundingClientRect();
            point.style.transformOrigin = `${point.getAttribute('cx')}px ${point.getAttribute("cy")}px`;
            const marks = document.createElement('p');
            marks.innerHTML = point.label;
            marks.setAttribute('style', `
                position: absolute;
                left: ${r.left}px;
                top: ${r.top-30}px;
                zIndex: 10000;
                padding: 5px;
                color: white;
                backdrop-filter: blur(3px);
                border-radius: 5px;
                background: rgba(0,0,0,0.3);
            `)
            point.style.scale='1.4';
            point.style.transition = 'scale .2s';
            point.style.stroke = 'white';
            document.body.append(marks);
            point.addEventListener('mouseout', e => {
                marks.remove();
                point.style.stroke='lightgray';
                point.style.scale='1';
            }, {once:true})
        }
    })

    return point
}

function studentDetails(e, data){
    const sd = document.querySelector('.studentDetails');
    sd.style.display = 'block';
    document.getElementById('fade').style.display='block';
    const name = sd.querySelector('.name');
    name.innerHTML = data.name;
    const img = sd.querySelector('.img figure img');
    img.setAttribute('src', data.imgurl);

    data.achievements.forEach(achievement => {
        const li = document.createElement('li');
        li.innerHTML = achievement;
        sd.querySelector('[achievements] ul').insertAdjacentElement('afterbegin', li);
    })

    

    // Ye tera graph ke liye

    let maxVal=0, lengths=[];
    const keys = Object.keys(data.marks);
    for(let key in data.marks){
        if(Math.max(data.marks[key])>maxVal) maxVal = Math.max(data.marks[key])
        lengths.push(data.marks[key].length);
    }
    const distDiff = 400/(Math.max(...lengths)-1);   // yaha par 400 graph ki width hai, fixed rahegi vo, agar badhani pade to isse bhi change kar diyo nhi to sirf 400 tak hi graph plot hoga.
    const y = 155; // ye bhi fixed rahegi y values ke liye for coordinates on x axis of graph. agar upar niche kare go isse bhi badal diyo.
    for(let i = 0; i<Math.max(...lengths)-1; i++){
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('y', y);
        text.setAttribute('x', 20+distDiff*(i+1)); // yaha par 20 constant hai, ye hai graph ki x axis par origin(not 0, but initial or 0 x point uhmmm... search kar liyo samjhaya nhi jayega) se doori
        text.innerHTML = i+1;
        text.setAttribute('style', 'font-size: 14px; fill: white;')
        sd.querySelector('[marksGraph] svg').append(text);
    }
    let count=-1;
    const colors=['lightblue', 'red', 'lightgreen', 'orange', 'yellow', 'white', 'pink'];
    keys.forEach((key, index) => {
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        polyline.setAttribute('fill', 'none');
        polyline.setAttribute('stroke', colors[index]);
        polyline.setAttribute('points', '');
        sd.querySelector('[marksGraph] svg').append(polyline);
        count+=1

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.innerHTML = key; // yaha par tujhe line break add karna hai aur count ko increment kar dena hai line break ke frequency se.
        text.setAttribute('style', `
            fill: #fff;
        `)
        text.setAttribute('x', 450);
        text.setAttribute('y', 20*(count+1));

        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        [['x', 428], ['y', 20*(count+0.45)], ['height', '12.5px'], ['width', '12.5px'], ['fill', colors[index]], ['stroke', 'white'], ['stroke-width', '1.5']].forEach(pair => rect.setAttribute(pair[0], pair[1]));


        sd.querySelector('[marksGraph] svg').append(rect, text);

        data.marks[key].forEach((marks, index) => {
            const y = 140-((marks/100)*130);
            const x = 20+distDiff*index;
            polyline.setAttribute("points", polyline.getAttribute('points') + `${x},${y} `);
            const point = pointCreator();
            point.setAttribute('cx', x)
            point.setAttribute('cy', y)
            point.setAttribute('fill', polyline.getAttribute('stroke'));
            point.label = marks+'%';
            sd.querySelector('[marksGraph] svg').append(point);
        })
    })
}

window.addEventListener('load', e => {

    const add = document.querySelector('#add');
    add.style.marginTop = add.parentElement.getBoundingClientRect().height - add.getBoundingClientRect().height - 10 + 'px'
    add.style.marginLeft = add.parentElement.getBoundingClientRect().width - add.getBoundingClientRect().width - 10 + 'px';

    // database code here


    // is niche wale ko uncomment kar diyo baad mei jab database wala code aayega.

    // let students be an array of objects
    // students.forEach(student => {
    //     `<div class="student">
    //         <div class="uImg">
    //             <img src="${student.imgurl}" height="100%" alt="sIco" />
    //         </div>
    //         <div class="sDetails">
    //             <h3 class="sName" style="font-family: 'omega sans';">${student.name}</h3>
    //             <p>${student.rollno}</p>
    //         </div>
    //     </div>`
    // })

    document.body.append(document.querySelector('.studentDetails'))
    const students = [...document.querySelector('.students').children];
    students.forEach(student => {

        // general details, aca details, marks(except graph), aur achievements(overflow) ki script likhni rehti hai, unko dikhne ke liye, vo khud bhi kar liyo bs elements to get karke unke andar feed hi to karna hai.

        // feed the database variables here in this object, baaki ka kaam vo khud sambhal lega.
        const data = {
            name: e.target.querySelector('.sName').innerHTML, // isme daalne ki koi jarurat nhi hai
            fName:undefined, 
            mName:undefined, 
            mob:undefined, 
            email:undefined, 
            dob:undefined, 
            imgurl: e.target.querySelector('.uImg img').getAttribute('src'), // isme bhi daalne ki koi jarurat nhi hai
            address:undefined, 
            achievements:['college mei pehla aaya tha, padhai mei', 'college mei pehla athlete', 'ye test achievements hai.', 'sabse last wali achievement sabse pehle aayegi, is baat ka dhyan rakhna'],  // the last achievement will be shown first, reason - ek nayi achievement jab append hogi, to latest ko sabse upar dikhana sahi hai aur jo purani hoti jaye vo niche jaati jaye.
            marks: {
                "sample key 1":[40, 50, 80, 60, 70],               /** ya fir subject wise, semester wise, sessional wise etc. saaro ka ikatha bhi ho sakta hai, lekin fir usme subject wise include mat karna. */
                "sample key 2":[90, 30, 60, 90, 87, 30], 
                "sample key 3":[76, 83, 100, 95, 90]
            }, 
            rollNo: 7, 
            semester:undefined, 
            batch:undefined, 
            ranking: undefined
        }

        student.addEventListener('click', e => studentDetails(e, data));
    })
})
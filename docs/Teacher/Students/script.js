function pointCreator(){
    const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    point.setAttribute('r', '2');

    return point
}

function studentDetails(e, data){
    document.querySelector('.studentDetails').style.display = 'block';
    document.getElementById('fade').style.display='block';
    let maxVal=0, lengths=[];
    const keys = Object.keys(data.marks);
    for(let key in data.marks){
        if(Math.max(data.marks[key])>maxVal) maxVal = Math.max(data.marks[key])
        lengths.push(data.marks[key].length);
    }
    const distDiff = 390/Math.max(...lengths);   // yaha par 400 graph ki width hai, fixed rahegi vo, agar badhani pade to isse bhi change kar diyo nhi to sirf 400 tak hi graph plot hoga.
    const valDiff = maxVal/keys.length;

    // <text fill="black" x="-2" y="10" style="font-size: 12px;">100</text>
    const y = 155; // ye bhi fixed rahegi y values ke liye for coordinates on x axis of graph. agar upar niche kare go isse bhi badal diyo.
    for(let i = 0; i<data.marks[keys[0]].length; i++){
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('y', y);
        text.setAttribute('x', 20+distDiff*(i+1)); // yaha par 20 constant hai, ye hai graph ki x axis par origin(not 0, but initial or 0 x point uhmmm... search kar liyo samjhaya nhi jayega) se doori
        text.innerHTML = i+1;
        text.setAttribute('style', 'font-size: 14px;')
        document.querySelector('[marksGraph] svg').append(text);
    }
    const colors=['blue', 'red', 'green', 'yellow', 'purple', 'white', 'black'];
    keys.forEach((key, index) => {
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        polyline.setAttribute('fill', 'none');
        polyline.setAttribute('stroke', colors[index]);
        polyline.setAttribute('points', '');
        data.marks[key].forEach((marks, index) => {
            const y = 140-((marks/100)*130);
            const x = 20+distDiff*(index+1);
            polyline.setAttribute("points", polyline.getAttribute('points') + `${x},${y} `);
            const point = pointCreator();
            point.setAttribute('cx', x-(Number(point.getAttribute('r'))/2))
            point.setAttribute('cy', y-(Number(point.getAttribute('r'))/2))
            point.setAttribute('fill', polyline.getAttribute('stroke'));
            document.querySelector('[marksGraph] svg').append(point);
        })
        document.querySelector('[marksGraph] svg').append(polyline);
    })
}

window.addEventListener('load', e => {

    const add = document.querySelector('#add');
    add.style.marginTop = add.parentElement.getBoundingClientRect().height - add.getBoundingClientRect().height - 10 + 'px'
    add.style.marginLeft = add.parentElement.getBoundingClientRect().width - add.getBoundingClientRect().width - 10 + 'px';

    document.body.append(document.querySelector('.studentDetails'))
    const students = [...document.querySelector('.students').children];
    students.forEach(student => {
        // database code here
        const data = {
            name:undefined, 
            fName:undefined, 
            mName:undefined, 
            mob:undefined, 
            email:undefined, 
            dob:undefined, 
            imgurl:'someurl', 
            address:undefined, 
            achievements:[], 
            marks: {
                "First Year":[40, 50, 80, 60, 70],               /** ya fir subject wise, semester wise, sessional wise etc. saaro ka ikatha bhi ho sakta hai, lekin fir usme subject wise include mat karna. */
                "Second Year":[90, 30, 60, 90, 87], 
                "Third Year":[76, 83, 100, 95, 90]
            }, 
            rollNo:007, 
            semester:undefined, 
            batch:undefined, 
            ranking: undefined
        }

        student.addEventListener('click', e => studentDetails(e, data));
    })
})
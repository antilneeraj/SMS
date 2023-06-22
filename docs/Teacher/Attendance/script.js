window.addEventListener('load', async function(e) {
    const studentTable = document.querySelector('.studentsContainer');

    // ye api ek object[] return karega jisme har ek index par ek object hoga har ek student ko represent karte hue. us object mei uski details hogi jaise roll no., name, class/year/semester, etc.

    // search operations ke liye dob, phone, father's name etc be needed hai isliye unko hataiyo mat.

    // jab backend ho jaye to niche api/server ka link daal diyo aur uncomment kar diyo
    const res = await fetch('http://localhost:2080', {
        method: 'POST',
        body: JSON.stringify({
            requestFor: 'studentsList',
            required: [
                'rollno',
                'name',
                'semester',
                'dob',                    // aur ek baat ka dhyan rakhiyo dob mei DATE OBJECT(new Date() vala) ka use kariyo jisse agar kuch aur parameters chahiye ho (jaise day(tuesday, monday, etc.), date, month, year, matlab kuch bhi isse related) to koi dikkat nhi aaye.
                'phone',                 // aur ek baat ka dhyan rakhiyo phone mei ek Number[] aayega na ki single Number kyuki kisi ke do no. bhi ho sakte hai kya pata.
                'fName',
            ]
        }),
        // headers: {'Content-Type': 'application/json'}
    })
    const students = await res.json()


    // ye sample students ke liye hai jab tak api nhi bana tab tak testing ke liye ki components thik se kaam kar rahe hai ya ni.
    // if(!students){
    //     students = [
    //         {name: 'ranbir', rollno: '109248553', semester: '5', dob: new Date('12-20-2000'), phone: [9081723438], fName: 'ranchhod das chanchad'},
    //         {name: 'jogdas jogindar', rollno: '9911904048', semester: '2', dob: new Date('12-20-2022'), phone: [9835729385], fName: 'jogindardas jogeshwar'}
    //     ]
    // };
    students.forEach((student, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index+1}</td>
            <td>${student.rollno}</td>
            <td>${student.name}</td>
            <td><input type='checkbox' height='100%' width='100%'></td>
            <td><input type='checkbox' height='100%' width='100%'></td>
        `;
        studentTable.append(tr);  
    });
    addSearchListener((e) => {
        students
    })
});
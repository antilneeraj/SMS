window.addEventListener('load', e => {
    const select = document.querySelector('.select');

    select.children[1].style.display = 'block';
    select.children[0].style.width = (select.children[1].getBoundingClientRect().width-(15*2))+'px';
    select.children[1].style.display = 'none';


    count=1;
    select.addEventListener('click', e => {
        if(count%2===0){
            select.children[1].style.display = 'block';
            select.style.borderRadius = '10px 10px 0 0';
        }
        else{
            select.style.borderRadius = '10px';
            select.children[1].style.display = 'none';
            select.children[0].innerHTML = (e.target===select || e.target===select.children[1]?select.children[0]:e.target).innerHTML;
            select.value = select.children[0].innerHTML;
            select.dispatchEvent(new Event('change'));    // You could also put the onchange handler's code here, but to make the code look cleaner, I did this...
        }
        count++;
    })
    select.children[1].children[0].click();

    select.addEventListener('change', e => {
        // alert(select.value);

        // Your code goes here...


    })

    const add = document.querySelector('#add');
    add.style.marginTop = add.parentElement.getBoundingClientRect().height - add.getBoundingClientRect().height - 10 + 'px'
    add.style.marginLeft = add.parentElement.getBoundingClientRect().width - add.getBoundingClientRect().width - 10 + 'px';
})
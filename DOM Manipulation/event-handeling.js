const text1 = document.querySelector('.text1');

const button1 = document.createElement('button');
button1.textContent = "Click Me";
button1.classList.add('button1');
text1.append(button1);

/*
button1.addEventListener('click',() => {
    alert("Hello World");
});
*/
function dtx(){
    alert("Hello World");
}

button1.addEventListener('click',dtx);

//Remove eventListner
button1.removeEventListener('click', dtx);

button1.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "red";
})

button1.addEventListener('mouseout', (event)=>{
    event.target.style.backgroundColor = '';
})
//Get elements
const text1 = document.getElementById('text1'); //or document.querySelector('#text1');
const text2 = document.querySelector('.text2');

text1.style.color = "green";
text2.style.color = "red";

//Edit elements
text1.textContent = "Hello";  //change the content
text2.textContent = "World";

const text3 = document.querySelector('.text3');

console.log(text3.innerText); //show only visible part
console.log(text3.textContent); // show the both visible and not visible

const text4 = document.querySelector('.text4');

//create a element
const dtx = document.createElement('div');
dtx.innerHTML = '<p>dtx</p>';
text4.append(dtx);

console.log(dtx.textContent);
console.log(dtx.innerHTML);

//Replace innerHtml
text1.innerHTML = '<button>Click Me</button>';

//Remove Elements
const text5 = document.createElement('p');
text5.innerHTML = 'Hello Weditha';
text4.append(text5);

// text5.remove();  OR
text4.removeChild(text5);

const text6 = document.createElement('div');
text6.innerHTML = '<p>1</p><p>2</p><p>3</P>';
text4.append(text6);

while(text6.firstChild){
    text6.removeChild(text6.firstChild);
}



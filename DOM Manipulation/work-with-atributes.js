const text1 = document.querySelector('.text1');

const text2 = document.createElement('div');
text2.setAttribute('class','text2'); // OR text2.class = 'text2';
text2.textContent = "World";
text2.setAttribute('style', 'color : red');

text1.append(text2);

console.log(text2.getAttribute('style'));  // OR console.log(text2.style);

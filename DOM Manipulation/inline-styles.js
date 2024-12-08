const text1 = document.querySelector('.text1');

const text2 = document.createElement('div');
text2.classList.add('text2');
text1.append(text2);

text2.textContent = "Text2";
text2.style.color = "red";
text2.style.fontSize = "50px";
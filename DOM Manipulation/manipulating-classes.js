const text1 = document.querySelector('.text1');

const text2 = document.createElement('div');
text2.classList.add('class1','class2'); //We can add multiple classess
text2.textContent = "Text2";
text1.append(text2);


console.log(text2.className);

text2.classList.remove('class2');
text2.classList.add('class3');

console.log(text2.className);


text2.classList.replace('class1','newClass');
console.log(text2.className);
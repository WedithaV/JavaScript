const parentElement = document.querySelector('.parentElement');
const childElement1 = document.createElement('p');
const childElement2 = document.createElement('button');
childElement2.textContent = "Click ME";
const childElement3 = document.createElement('div');

parentElement.append(childElement1,childElement2,childElement3);

console.log(parentElement.firstChild);
console.log(parentElement.lastChild);
console.log(childElement1.nextSibling);
console.log(childElement2.previousSibling);
console.log(childElement1.parentNode);


//This method is very helpful to access elements without id,class
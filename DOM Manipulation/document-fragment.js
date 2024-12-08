/*
Use Case of Document Fragments in JavaScript
A Document Fragment in JavaScript is a lightweight,
minimalistic version of the DOM that acts as a container for DOM nodes. 
It is used to improve performance and efficiency when manipulating the DOM.
Here are the primary use cases:
*/

const playground = document.querySelector('.playground');

const fragment = document.createDocumentFragment();

for(let i = 0; i < 5; i++){
    const magicItem = document.createElement('li');
    magicItem.textContent = `Magical Item ${i + 1}`;
    fragment.append(magicItem);
}

const unorderedList = document.createElement('ul');
playground.append(unorderedList);
unorderedList.append(fragment);
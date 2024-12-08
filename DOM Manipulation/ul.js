const text1 = document.querySelector('.text1');
const unorderedList = document.createElement('ul');
unorderedList.classList.add('unorderedList');
text1.append(unorderedList);

function dtx(listItem){
    const trex = document.createElement('li');
    trex.textContent = listItem;
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    trex.append(removeButton);
    unorderedList.append(trex);

    removeButton.addEventListener('click',() =>{
        trex.remove();
    });

}

dtx(1);
dtx(2);
dtx(3);
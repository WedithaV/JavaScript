const playground = document.getElementById('playground');
const template = document.getElementById('wizard-template');

function createWizard(name, specialty){
    const wizardElement = template.content.cloneNode(true);
    wizardElement.querySelector('.wizard-name').textContent=name;
    wizardElement.querySelector('.wizard-specialty').textContent=specialty;
    playground.append(wizardElement);
}

createWizard("Weditha","Wizard");
createWizard("Merlin","DTX");
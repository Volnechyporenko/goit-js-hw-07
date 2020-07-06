const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
inputRef.addEventListener('input', handleInputChange);

function handleInputChange(event){
  spanRef.textContent = event.target.value ? event.target.value : 'незнакомец';
};
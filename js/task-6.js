const validationInputRef = document.querySelector('#validation-input');
validationInputRef.addEventListener('blur', handleValidationInputBlur);
function handleValidationInputBlur (event) {
  const target = event.target;
  if(Number(target.value.length) === Number(target.dataset.length)){
    validationInputRef.classList.add('valid');
    validationInputRef.classList.remove('invalid')
  } else {
    validationInputRef.classList.add('invalid');
    validationInputRef.classList.remove('valid');
  };
};
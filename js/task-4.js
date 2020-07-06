const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

console.log(btnDec)

let counterValue = 0;
const increment = () => {
	counterValue +=1;
  valueRef.textContent = counterValue;
}
const decrement = () => {
	counterValue -=1;
  valueRef.textContent = counterValue;
};

btnDec.addEventListener('click', () => decrement());
btnInc.addEventListener('click', () => increment());
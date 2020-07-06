// window.addEventListener('keydown', event => {
//   console.log('event.key', event.key);
//   console.log('event.code', event.code);
//   if(event.code === 'KeyG'){
//     console.log('WIN!')
//   };
//   if(event.code === 'Escape'){
//     console.log('Enter @Escape@')
//   }
// });

// =========7 task========
// const input = document.querySelector("#font-size-slider");
// const span = document.querySelector("#text");
// input.addEventListener("input", handleInputRange);
// function handleInputRange(event) {
//   span.style.fontSize = event.currentTarget.value + "px";
// };
// =====================2============
{/* <ul id="ingredients"></ul>
// ========3=================
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallary = document.querySelector('#gallery');
gallary.insertAdjacentHTML('beforeend', images.reduce((acc, el) => {
  acc += `<li><img src='${el.url}' title='${el.alt}' width = 300</li>`;
  return acc;
}, ''));
gallary.classList.add('gallarystyle');
console.dir(gallary); */}
// ================1==============
// const cateEl = document.querySelector('#categories');
// console.log(cateEl);
// const secondCateEl = cateEl.querySelectorAll('ul');
// console.log(`В списке ${secondCateEl.length} категории`);
// const elementH = cateEl.querySelectorAll('.item')
// for(let i=0; i < elementH.length; i++){
//     const cateName = elementH[i].querySelector('h2').textContent;
//     const elCount = elementH[i].querySelectorAll('li').length;
//     console.log(`Категория: ${cateName}`);
//     console.log(`Количестко элементов: ${elCount}`);
// };
// ==================4==========

// const btnDec = document.querySelector('[data-action="decrement"]');
// const btnInc = document.querySelector('[data-action="increment"]');
// const valueRef = document.querySelector('#value');

// console.log(btnDec)

// let counterValue = 0;
// const increment = () => {
// 	counterValue +=1;
//   valueRef.textContent = counterValue;
// }
// const decrement = () => {
// 	counterValue -=1;
//   valueRef.textContent = counterValue;
// };

// btnDec.addEventListener('click', () => decrement());
// btnInc.addEventListener('click', () => increment());
// =======================5=================
// const inputRef = document.querySelector('#name-input');
// const spanRef = document.querySelector('#name-output');
// inputRef.addEventListener('input', handleInputChange);

// function handleInputChange(event){
//   spanRef.textContent = event.target.value ? event.target.value : 'незнакомец';
// };
// =============================6====
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
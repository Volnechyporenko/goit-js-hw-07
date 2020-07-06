const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsEl = document.querySelector('#ingredients');
const ingredItems = ingredients.map(item => {
    const items = document.createElement('li');
    items.textContent = item;
    ingredientsEl.append(items);
});

const cateEl = document.querySelector('#categories');
console.log(cateEl);
const secondCateEl = cateEl.querySelectorAll('ul');
console.log(`В списке ${secondCateEl.length} категории`);
const elementH = cateEl.querySelectorAll('.item')
for(let i=0; i < elementH.length; i++){
    const cateName = elementH[i].querySelector('h2').textContent;
    const elCount = elementH[i].querySelectorAll('li').length;
    console.log(`Категория: ${cateName}`);
    console.log(`Количестко элементов: ${elCount}`);
};



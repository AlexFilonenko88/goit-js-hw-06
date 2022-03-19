const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);

const categoriesEl = document.querySelector('#categories').querySelectorAll('.item');
categoriesEl.forEach(elem => {
console.log(`Category: ${elem.querySelector('h2').textContent}`);
console.log(`Elements: ${elem.querySelector('ul').children.length}`);
});



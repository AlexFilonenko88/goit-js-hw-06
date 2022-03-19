const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const creatEl = function (elem) {
  const elementEl = document.createElement('li');
  elementEl.textContent = elem;
  elementEl.classList.add('item-ingredients');

  return elementEl;
}

const newArrEl = ingredients.map(creatEl); // callback

document.querySelector('#ingredients').append(...newArrEl);




 
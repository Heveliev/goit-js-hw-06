const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrd = document.querySelector('#ingredients');
ingredients.forEach(element => {
  const createLi = document.createElement('li');
createLi.classList.add('item');
createLi.textContent = [element];
ingrd.append(createLi);
});

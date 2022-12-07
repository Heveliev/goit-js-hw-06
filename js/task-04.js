let counterValue = 0;

const span = document.querySelector('#value').textContent=counterValue;

function plusOne(x) {
x = x + 1
}
function minusOne(x){
   x = x - 1
}

const btnMinus = document.querySelector('#counter').firstElementChild;
const btnPlus = document.querySelector('#counter').lastElementChild;

btnMinus.addEventListener('click', minusOne(counterValue),true);
btnPlus.addEventListener('click', plusOne(counterValue),true);

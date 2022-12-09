let counterValue = 0;

// counterValue = spanHtml;

const btnMinus = document.querySelector('#counter').firstElementChild;
const btnPlus = document.querySelector('#counter').lastElementChild;


btnMinus.addEventListener('click',(evnt)=>{ 
   counterValue -= 1
   document.querySelector('#value').textContent = counterValue;})
btnPlus.addEventListener('click',()=>{ 
   counterValue +=1
   document.querySelector('#value').textContent =  counterValue;})


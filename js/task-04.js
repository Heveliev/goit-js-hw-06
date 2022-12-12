let counterValue = 0;


const spanHtml =  document.querySelector('#value');
const btnMinus = document.querySelector('#counter').firstElementChild;
const btnPlus = document.querySelector('#counter').lastElementChild;


btnMinus.addEventListener('click',(evnt)=>{ 
   counterValue -= 1
  spanHtml.textContent = counterValue;})
btnPlus.addEventListener('click',()=>{ 
   counterValue +=1
   spanHtml.textContent =  counterValue;})


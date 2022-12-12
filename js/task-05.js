const inputHtml = document.querySelector('#name-input');
const spanHtml = document.querySelector('#name-output');

inputHtml.addEventListener('input', 
(event)=>{
    if(!inputHtml.value){spanHtml.textContent = 'Anonymous'}
    else{spanHtml.textContent = event.currentTarget.value}})


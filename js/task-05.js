const inputHtml = document.querySelector('#name-input');
inputHtml.addEventListener('input', (event)=>{document.querySelector('#name-output').textContent = event.currentTarget.value})


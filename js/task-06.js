const inputHtml = document.querySelector('#validation-input');

const minLength = inputHtml.getAttribute('data-length');

inputHtml.addEventListener('blur', (event)=> {
    const {value} = event.currentTarget;
    if(value.length >= minLength) {inputHtml.classList.add('valid')}else{inputHtml.classList.add('invalid')}})
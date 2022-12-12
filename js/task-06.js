const inputHtml = document.querySelector('#validation-input');

const minLength = Number(inputHtml.getAttribute('data-length'));

inputHtml.addEventListener('blur', (event)=> {
    const {value} = event.currentTarget;

    if(value.length >= minLength) {
        inputHtml.classList.remove('invalid');
        inputHtml.classList.add('valid')}else{
            inputHtml.classList.remove('valid')
            inputHtml.classList.add('invalid')}})
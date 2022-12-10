const formHtml = document.querySelector('.login-form');
const obj = {};

const message = 'Всі поля повинні бути заповнені!';
formHtml.addEventListener('submit',foo);
function foo (evt){

evt.preventDefault();
if(!formHtml.email.value.trim()){alert(message)};
if(!formHtml.password.value.trim()){alert(message)};

const {email,password} = evt.currentTarget.elements;

obj[formHtml.email.name] = `${email.value}`;
obj[formHtml.password.name] = `${password.value}`;
console.log(obj);
    }

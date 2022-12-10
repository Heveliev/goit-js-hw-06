function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnHtml = document.querySelector('.change-color');
const spanHtml = document.querySelector('.color').textContent;
btnHtml.addEventListener('click',foo)

function foo () {
  const valueFoo = getRandomHexColor();
document.querySelector('body').style.backgroundColor = `${valueFoo}`;
document.querySelector('.color').textContent=`${valueFoo}`
}
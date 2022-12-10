function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divHtml = document.querySelector('#boxes');


const inputHtml = document.querySelector('#controls').children[0];
const btnCreate = document.querySelector('#controls').children[1];
const btnDestroy = document.querySelector('#controls').children[2];
let value = 0;

// inputHtml.addEventListener('change',(evt)=>{
//   value = Number(evt.target.value);
//   })

let size = 30;
const patern = '<div style="display:flex; weight:30; height:30; background-color:tomato;"></div>'
btnCreate.addEventListener('click', createBoxes)

function createBoxes() {
 

  for(let i = 1;i <= 2;i += 1 ){


divHtml.insertAdjacentHTML('beforeend',patern);


  }
}


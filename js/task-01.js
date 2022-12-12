const quantItem = document.querySelectorAll('.item');
const lengthArr = quantItem.length;
console.log(`Number of categories: ${lengthArr}`);

quantItem.forEach(evm => {
const title = evm.querySelector('h2').outerText;
const len = evm.querySelector('ul').children.length;
console.log(`Category: ${title} 
Elements:${len}`)
})


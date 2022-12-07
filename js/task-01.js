const quantItem = document.querySelectorAll('.item');
const lengthArr = quantItem.length;
console.log(`Number of categories: ${lengthArr}`);


const firstElem = quantItem[0].firstElementChild.outerText;
const secondElem = quantItem[1].firstElementChild.outerText;
const thirdElem = quantItem[2].firstElementChild.outerText;

console.log(`Category: ${firstElem}
Elements: ${quantItem[0].lastElementChild.children.length}`);
console.log(`Category: ${secondElem}
Elements: ${quantItem[1].lastElementChild.children.length}`);
console.log(`Category: ${thirdElem}
Elements: ${quantItem[2].lastElementChild.children.length}`);

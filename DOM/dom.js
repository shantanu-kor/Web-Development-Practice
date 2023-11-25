// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); // shows undefined in firefox, works in Chrome //
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello'; // avoid using as index might change //
// console.log(document.forms[0]);
// console.log(document.links); // returns html collection not array (cannot use .reverse()) //
// console.log(document.images);



// GETELEMENTBYID //
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header'); 
// console.log(headerTitle);
// headerTitle.textContent = 'Hello'; // will show text irrespective of style //
// headerTitle.innerText = 'GoodBye'; // will take style into consideration //
// console.log(headerTitle.textContent) // ---^ //
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';

// addItems = document.getElementById('add-items');
// addItems.style.fontWeight = 'bold';
// addItems.style.color = 'green';



// GETELEMENTSBYCLASSNAME //
// let items =  document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';

// for (let i = 0; i < items.length; i++){
//     items[i].style.fontWeight = "bold";
// }

// items.style.backgroundColor = "#f4f4f4"; // gives error //

// for (let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4";
// }



// GETELEMENTSBYTAGNAME //
// let li =  document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// items.style.backgroundColor = "#f4f4f4"; // gives error //

// for (let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = "#f4f4f4";
// }



// QUERYSELECTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input'); // selects the first //
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';



// QUERYSELECTORALL //
// let titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

// let all = document.querySelectorAll('li');
// all[1].style.color = 'green';




//  TRAVERSING THE DOM //
let itemList = document.querySelector('#items');

// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.background = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

// parentElement - interchangable with parentNode
console.log(itemList.parentElement);
itemList.parentElement.style.background = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);


// childNodes
console.log(itemList.childNodes) // has text for space, so not used.

// children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';


// firstChild
console.log(itemList.firstChild); // text, so not used

// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello 1';


// lastChild
console.log(itemList.lastChild); // text, so not used

// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello 4';


// nextSibling
console.log(itemList.nextSibling); // text, so not used

// nextElementSibling
console.log(itemList.nextElementSibling);


// previousSibling
console.log(itemList.previousSibling); // text, so not used

// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';



// createElement

// Create a div
let newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
let newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);


let newLi = document.createElement('li');
let textLi = document.createTextNode(' Hello World')
newLi.appendChild(textLi);
let container1 = document.querySelector('#items');
let li1 = document.querySelector('li:first-child');

container1.insertBefore(newLi, li1);

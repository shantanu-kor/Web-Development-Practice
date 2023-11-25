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
let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header'); 
// console.log(headerTitle);
// headerTitle.textContent = 'Hello'; // will show text irrespective of style //
// headerTitle.innerText = 'GoodBye'; // will take style into consideration //
// console.log(headerTitle.textContent) // ---^ //
// headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';

addItems = document.getElementById('add-items');
addItems.style.fontWeight = 'bold';
addItems.style.color = 'green';

// GETELEMENTSBYCLASSNAME //
let items =  document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';

for (let i = 0; i < items.length; i++){
    items[i].style.fontWeight = "bold";
}


// items.style.backgroundColor = "#f4f4f4"; // gives error //

// for (let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4";
// }

// GETELEMENTSBYTAGNAME //
let li =  document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// items.style.backgroundColor = "#f4f4f4"; // gives error //

for (let i = 0; i < li.length; i++){
    li[i].style.backgroundColor = "#f4f4f4";
}

// 
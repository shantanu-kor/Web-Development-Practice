let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem)

filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    let newItem1 = document.getElementById('description').value;

    // Create new li element
    let li = document.createElement('li');
    // Add class
    li.className = "list-group-item";
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem+" "+newItem1));

    // Create del button element
    let deleteBtn = document.createElement('button');

    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);

    let editBtn = document.createElement('button');

    editBtn.setAttribute('style', 'background-color:yellow;float:right;');

    editBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(editBtn);

    // Append li to list
    itemList.appendChild(li);

}

// Remove item
function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get list
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}
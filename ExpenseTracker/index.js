let lis = document.getElementById("list");

function submitted(e) {
    e.preventDefault();

    let expamnt = document.getElementById("expamnt").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;

    let lisElement = document.createElement('li');
    lisElement.className = "list-group-item";
    let text = document.createTextNode(expamnt+" - "+description+" - "+category);
    let delBtn = document.createElement('button');
    delBtn.className = "btn btn-danger delete"
    delBtn.setAttribute('style', 'float:right')
    delBtn.appendChild(document.createTextNode('X'));

    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning edit'
    editBtn.setAttribute('style', 'float:right')
    editBtn.appendChild(document.createTextNode("Edit"));

    lisElement.appendChild(text);
    lisElement.appendChild(delBtn);
    lisElement.appendChild(editBtn);
    lis.appendChild(lisElement);

    localStorage.setItem(expamnt+" - "+description+" - "+category, JSON.stringify({amount:expamnt, description:description, category:category}));

    document.getElementById("expamnt").value = '';
    document.getElementById("description").value = '';
    document.getElementById("category").value = "Fuel";

}

lis.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            localStorage.removeItem(li.textContent.split('X')[0])
            document.getElementById('list').removeChild(li);
        }
    }
})

lis.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            let text = li.textContent.split('X')[0]
            localStorage.removeItem(text)
            let arr = text.split(' - ');
            document.getElementById("expamnt").value = arr[0];
            document.getElementById("description").value = arr[1];
            document.getElementById("category").value = arr[2];
            document.getElementById('list').removeChild(li);
        }
    }
})
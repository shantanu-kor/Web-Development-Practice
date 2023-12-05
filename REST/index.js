let id = "e97cc58883084f168dfd3b7da3aef787";

let lis = document.getElementById("list");
let lis1 = document.getElementById("list1");
let todoName = document.getElementById("todoName");
let description = document.getElementById("description");

function submitted(e){
    e.preventDefault();

    obj = {
        todo: todoName.value,
        description: description.value,
        done: false
    }
    axios.post(`https://crudcrud.com/api/${id}/Todos`, obj)
        .then(res => {createTodoRemaining(res.data)})
        .catch(err => console.log(err));
    todoName.value = '';
    description.value = '';
}

function createTodoRemaining(obj){
    lisEle = document.createElement("li");
    text = document.createTextNode(obj.todo+" - "+obj.description);
    done = document.createElement("button");
    done.textContent = "Done";
    done.className = "btn done";

    del = document.createElement("button");
    del.textContent = "X";
    del.className = "btn delete";
    
    lisEle.appendChild(text);
    lisEle.appendChild(done);
    lisEle.appendChild(del);
    lis.appendChild(lisEle);
}

window.addEventListener("DOMContentLoaded", () => loadTodo());

function loadTodo(){
    axios.get(`https://crudcrud.com/api/${id}/Todos`)
        .then(res => {
            for (let i of res.data){
                if (i.done == false){
                    createTodoRemaining(i);
                }
                else {
                    createTodoDone(document.createTextNode(i.todo+" - "+i.description));
                }
            }
        })
}

lis.addEventListener('click', (e) => {
    if (e.target.classList.contains("done")){
        li = e.target.parentElement;
        text = document.createTextNode(li.innerText.split("DoneX")[0]);
        createTodoDone(text);
        text = li.innerText.split("DoneX")[0].split(" - ");
        axios.get(`https://crudcrud.com/api/${id}/Todos`)
            .then((res) => {
                for (let i of res.data){
                    if (i.todo == text[0] && i.description == text[1]){
                        axios.put(`https://crudcrud.com/api/${id}/Todos/`+i._id, {
                            todo: i.todo,
                            description: i.description,
                            done: true
                        }) 
                        break;
                    }
                }
            })
            .catch(err => console.log(err));
        lis.removeChild(li);
    }
})

function createTodoDone(text){
    lisEle = document.createElement("li");
    lisEle.appendChild(text);
    lis1.appendChild(lisEle);
}

lis.addEventListener('click', (e) => {
    if (e.target.classList.contains("delete")){
        li = e.target.parentElement;
        text = li.innerText.split("DoneX")[0].split(" - ");
        axios.get(`https://crudcrud.com/api/${id}/Todos`)
            .then(res => {
                for (let i of res.data){
                    if (i.todo == text[0] && i.description == text[1]){
                        axios.delete(`https://crudcrud.com/api/${id}/Todos/`+i._id);
                        break;
                    }
                }
            })
            .catch(err => console.log(err));
        lis.removeChild(li);
    }
})
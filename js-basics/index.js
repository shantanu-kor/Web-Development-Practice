function logdata(event){
    event.preventDefault();
    // var name = event.target.username.value;
    // var email = event.target.email.value;
    // var phone = event.target.phone.value;
    // var date_time = event.target.dtime.value;
    // console.log("Name: "+name);
    // console.log("Email: "+email);
    // console.log("Phone: "+phone);
    // console.log("Date and Time: "+date_time);

    name = document.getElementById('username').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    dtime = document.getElementById('dtime').value;

    obj = {
        name: name,
        email: email,
        phone: phone,
        dtime: dtime
    }

    // localStorage.setItem(email, JSON.stringify(obj));

    axios.post("https://crudcrud.com/api/69c9c86753234af587f7efca7f645b1d/appointmentData", obj)
        .then(res => {
            addUserDetails(res.data)
            // console.log(res)
        })
        .catch(err => {
            document.body.innerText = "<h4>Something went wrong</h4>"
            console.log(err)
        })
    
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('dtime').value = '';
    

    
}
function printDataAtStart(){
    axios.get("https://crudcrud.com/api/69c9c86753234af587f7efca7f645b1d/appointmentData")
        .then(res => {
            for (let i of res.data){
                addUserDetails(i);
            }
        })
}
printDataAtStart()

function addUserDetails(obj){

    newli = document.createElement('li');
    newli.className = "list-group-item";
    text = document.createTextNode(obj.name+" - "+obj.email+" - "+obj.phone+" - "+obj.dtime);

    newli.appendChild(text);

    btn = document.createElement('button');
    btn.textContent = "DELETE";
    btn.className = 'delete';

    newli.appendChild(btn)
    
    btn = document.createElement('button');
    btn.textContent = "EDIT";
    btn.className = 'edit';

    newli.appendChild(btn)

    document.getElementById('list').appendChild(newli);
}

document.getElementById('list').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            email = li.innerText.split(' - ')[1];
            document.getElementById('list').removeChild(li);
            // localStorage.removeItem(email);
            axios.get("https://crudcrud.com/api/69c9c86753234af587f7efca7f645b1d/appointmentData")
                .then(res => {
                    for (i of res.data){
                        if (i.email == email){
                            axios.delete("https://crudcrud.com/api/69c9c86753234af587f7efca7f645b1d/appointmentData/"+i._id)
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
})

document.getElementById('list').addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            document.getElementById('list').removeChild(li);
            data = li.innerText.split(' - ');
            document.getElementById('username').value = data[0];
            document.getElementById('email').value = data[1];
            document.getElementById('phone').value = data[2];
            document.getElementById('dtime').value = data[3];
            // localStorage.removeItem(data[1]);
            email = data[1];
            axios.get("https://crudcrud.com/api/69c9c86753234af587f7efca7f645b1d/appointmentData")
                .then(res => {
                    for (i of res.data){
                        if (i.email == email){
                            axios.delete("https://crudcrud.com/api/69c9c86753234af587f7efca7f645b1d/appointmentData/"+i._id)
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
})
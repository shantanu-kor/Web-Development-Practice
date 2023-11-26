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

    localStorage.setItem(email, JSON.stringify(obj));

    newli = document.createElement('li');
    text = document.createTextNode(name+" - "+email+" - "+phone+" - "+dtime);

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
            document.getElementById('list').removeChild(li);
            email = li.innerText.split(' - ')[1];
            localStorage.removeItem(email);
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
            localStorage.removeItem(data[1]);
        }
    }
})
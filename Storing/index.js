const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    //e.preventDefault();
    btn.style.background = 'red';
})
btn.addEventListener('mouseover', (e) => {
    //e.preventDefault();
    btn.style.background = 'green';
})
btn.addEventListener('mouseout', (e) => {
    //e.preventDefault();
    btn.style.background = 'yellow';
})
const clicked = (e) => {
    e.preventDefault();
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    console.log(name);
    console.log(email);
    obj = {
        name: name,
        email: email
    }
    obj = JSON.stringify(obj)
    localStorage.setItem('details', obj);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}
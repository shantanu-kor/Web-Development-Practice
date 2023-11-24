function logdata(event){
    event.preventDefault();
    var name = event.target.username.value;
    var email = event.target.email.value;
    var phone = event.target.phone.value;
    var date_time = event.target.dtime.value;
    console.log("Name: "+name);
    console.log("Email: "+email);
    console.log("Phone: "+phone);
    console.log("Date and Time: "+date_time);
}
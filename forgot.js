function forgot(){
    let email = document.getElementById("email").value;

    if(email === ""){
        alert("Please enter valid email id");
    } else {
        alert("Reset link sent to your registered email");
    }
}
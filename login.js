document.querySelector(".register-form").addEventListener("submit", function (e){
    e.preventDefault();
    let email = document.getElementById("loginemail").value;
    let password = document.getElementById("loginpassword").value;

    let storedmail = localStorage.getItem("Email ID");
    let storedpass = localStorage.getItem("Password");

    if(email === storedmail && password === storedpass){
        window.location.href = "index.html" 
    }
    else{
        alert("Invalid Email or Password")
    }
})

const passwordInput = document.getElementById("loginpassword");
const toggleBtn = document.getElementById("toggleBtn");

// add icon inside toggle button
toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';

toggleBtn.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        passwordInput.type = "password";
        toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});
document.getElementById("loginBtn").addEventListener("click", function () {

    let email = document.getElementById("loginemail").value;
    let password = document.getElementById("loginpassword").value;

    let storedmail = localStorage.getItem("Email ID");
    let storedpass = localStorage.getItem("Password");

    if(email === storedmail && password === storedpass){

        document.getElementById("loader").style.display = "flex";

        setTimeout(function () {
            window.location.href = "index.html";
        }, 5000);

    } else {
        alert("Invalid Email or Password");
    }
});

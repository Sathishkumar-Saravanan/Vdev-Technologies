function isValidPassword(password) {
    const lengthCheck = password.length >= 8 && password.length <= 32;
    const upperCheck = /[A-Z]/.test(password);
    const lowerCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    const specialCheck = /[^A-Za-z0-9]/.test(password);

    return lengthCheck && upperCheck && lowerCheck && numberCheck && specialCheck;
}


const password = document.getElementById("pass");

const rules = {
    length: document.getElementById("length"),
    uppercase: document.getElementById("uppercase"),
    lowercase: document.getElementById("lowercase"),
    number: document.getElementById("number"),
    special: document.getElementById("special")
};

password.addEventListener("input", () => {
    const value = password.value;

    toggleRule(rules.length, value.length >= 8 && value.length <= 32);
    toggleRule(rules.uppercase, /[A-Z]/.test(value));
    toggleRule(rules.lowercase, /[a-z]/.test(value));
    toggleRule(rules.number, /[0-9]/.test(value));
    toggleRule(rules.special, /[^A-Za-z0-9]/.test(value));
});

function toggleRule(element, condition) {
    if (condition) {
        element.classList.add("valid");
    } else {
        element.classList.remove("valid");
    }
}


document.querySelector(".register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let repass = document.getElementById("repass").value;

    if (!isValidPassword(pass)) {
        alert("Password does not meet requirements!");
        return;
    }

    if (pass !== repass) {
        alert("Password is not matching!");
        return;
    }

    localStorage.setItem("First Name", fname);
    localStorage.setItem("Last Name", lname);
    localStorage.setItem("Email ID", mail);
    localStorage.setItem("Password", pass);

    alert("Registration Successful");

    window.location.href = "login.html";
});

co
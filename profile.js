
const userEmail = localStorage.getItem("Email ID");

const userName = localStorage.getItem("First Name") || userEmail;



const userIcon = document.querySelector(".user");

if (userEmail && userIcon) {
    const firstLetter = userName.charAt(0).toUpperCase();

    userIcon.innerHTML = firstLetter;

    userIcon.style.display = "flex";
    userIcon.style.alignItems = "center";
    userIcon.style.justifyContent = "center";
    userIcon.style.width = "50px";
    userIcon.style.height = "40px";
    userIcon.style.borderRadius = "100%";
    userIcon.style.backgroundColor = "#4CAF50";
    userIcon.style.color = "#fff";
    userIcon.style.fontWeight = "bold";
    userIcon.style.cursor = "pointer";
}


const dropdown = document.createElement("div");
dropdown.classList.add("profile-dropdown");

dropdown.innerHTML = `
    <p><strong>${userName}</strong></p>
    <p>${userEmail}</p>
    <button id="logoutBtn">Logout</button>
`;

document.body.appendChild(dropdown);


dropdown.style.position = "absolute";
dropdown.style.top = "100px";
dropdown.style.right = "20px";
dropdown.style.background = "#fff";
dropdown.style.padding = "10px";
dropdown.style.borderRadius = "8px";
dropdown.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
dropdown.style.display = "none";


userIcon.addEventListener("click", () => {
    dropdown.style.display =
        dropdown.style.display === "none" ? "block" : "none";
});

document.addEventListener("click", function (e) {
    if (e.target.id === "logoutBtn") {

        window.location.href = "login.html";
    }
});


document.addEventListener("click", function (e) {
    if (!userIcon.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
    }
});
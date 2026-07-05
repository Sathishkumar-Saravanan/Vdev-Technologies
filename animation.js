const bg = document.querySelector(".bg-icons");

const symbols = ["</>", "{ }", "()", "[]", "<div>", "function()", "=>"];

for (let i = 0; i < 50; i++) {
  let span = document.createElement("span");
  span.innerText = symbols[Math.floor(Math.random() * symbols.length)];

  span.style.left = Math.random() * 100 + "%";
  span.style.top = Math.random() * 100 + "%";
  span.style.fontSize = (Math.random() * 20 + 10) + "px";
  span.style.animationDuration = (Math.random() * 10 + 5) + "s";

  bg.appendChild(span);

}

document.getElementById("enterBtn").onclick = () => {
  const intro = document.getElementById("intro");
  const loader = document.getElementById("loader");

  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    loader.style.display = "flex";
  }, 5000);
window.location.href = "home.html"
  setTimeout(() => {
  }, 3000);
};
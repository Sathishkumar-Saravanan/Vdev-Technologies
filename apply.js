
const params = new URLSearchParams(window.location.search);

const jobTitle = params.get("job");
const jobDesc = params.get("desc");

if(jobTitle){
    document.getElementById("jobTitle").textContent = jobTitle;
}

if(jobDesc){
    document.getElementById("jobDescription").textContent = jobDesc;
}
document.addEventListener("DOMContentLoaded", function () {

  const skillsList = [
    "HTML 5",
    "CSS 3",
    "JavaScript",
    "ES 6+",
    "React.js",
    "React Native",
    "Flutter",
    "Database"
  ];

  let selectedSkills = [];

  const input = document.getElementById("input");
  const suggestions = document.getElementById("suggestions");
  const tags = document.getElementById("tags");

  input.addEventListener("keyup", function () {
    let value = input.value.toLowerCase();
    suggestions.innerHTML = "";

    if (!value) return;

    let filtered = skillsList.filter(skill =>
      skill.toLowerCase().includes(value) &&
      !selectedSkills.includes(skill)
    );

    filtered.forEach(skill => {
      let div = document.createElement("div");
      div.textContent = skill;
      div.onclick = () => addSkill(skill);
      suggestions.appendChild(div);
    });
  });

  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && input.value.trim() !== "") {
      addSkill(input.value.trim());
    }
  });

  function addSkill(skill) {
    if (!selectedSkills.includes(skill)) {
      selectedSkills.push(skill);
    }
    input.value = "";
    suggestions.innerHTML = "";
    renderTags();
  }

  function renderTags() {
    tags.innerHTML = "";

    selectedSkills.forEach((skill, index) => {
      let tag = document.createElement("span");
      tag.className = "tag";

      let text = document.createTextNode(skill);
      let close = document.createElement("span");
      close.textContent = " x";

      close.addEventListener("click", function () {
        removeSkill(index);
      });

      tag.appendChild(text);
      tag.appendChild(close);

      tags.appendChild(tag);
    });

    console.log(selectedSkills);
  }

  function removeSkill(index) {
    selectedSkills.splice(index, 1);
    renderTags();
  }

  window.focusInput = function () {
    input.focus();
  };

});

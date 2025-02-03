const footer = document.createElement(`footer`);
const body = document.querySelector(`body`);
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement(`p`);
copyright.innerHTML = `<em>E'Ne'Chie Otis</em> ${thisYear} &#169;` ;
footer.appendChild(copyright);
var skills = ["Painting", "HTML", "CSS", "Javascript", "Github"];
const skillsSection = document.querySelector(`#Skills`);
var skillsList = skillsSection.querySelector(`ul`);

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement(`li`);
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

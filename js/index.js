const footer = document.createElement(`footer`);
const body = document.querySelector(`body`);
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement(`p`);
copyright.innerHTML = `<em>E'Ne'Chie Otis</em> ${thisYear} &#169;` ;
footer.appendChild(copyright);
let skills = ["Painting", "HTML", "CSS", "Javascript", "Github"];
const skillsSection = document.querySelector(`#Skills`);
let skillsList = skillsSection.querySelector(`ul`);

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement(`li`);
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

let messageForm = document.querySelector(`[name="leave_message"]`);
messageForm.addEventListener(`submit`, event =>{
  event.preventDefault();
  let usersName= event.target.usersName.value;
  let usersEmail= event.target.usersEmail.value;
  let usersMessage= event.target.usersMessage.value;
  let messageSection = document.querySelector(`#Messages`);
  let messageList = messageSection.querySelector(`ul`);
  let newMessage = document.createElement(`li`);
  newMessage.innerHTML= `<a href="mailto:${usersEmail}">${usersName}</a><span>${usersMessage}</span>`;

  let removeButton = document.createElement(`button`);
  removeButton.innerHTML= `remove`;
  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", function () {
    let entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  console.log(messageList);
  messageForm.reset();
} );

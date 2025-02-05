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

var messageForm = document.querySelector(`[name="leave_message"]`);
messageForm.addEventListener(`submit`, event =>{
  event.preventDefault();
  var usersName= event.target.usersName.value;
  var usersEmail= event.target.usersEmail.value;
  var usersMessage= event.target.usersMessage.value;
  var messageSection = document.querySelector(`#Messages`);
  var messageList = messageSection.querySelector(`ul`);
  var newMessage = document.createElement(`li`);
  newMessage.innerHTML= `<a href="mailto:${usersEmail}">${usersName}</a><span>${usersMessage}</span>`;

  var removeButton = document.createElement(`button`);
  removeButton.innerHTML= `remove`;
  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", function () {
    var entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  console.log(messageList);
  messageForm.reset();

} );

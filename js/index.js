const contactEmail = "karanjot2403@gmail.com";

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const mouseMoveElems = document.querySelectorAll(".mouse-move");

document.addEventListener("mousemove", (e) => {
  var x = e.clientX;
  var y = e.clientY;
  var distX = windowWidth / 2 - x;
  var distY = windowWidth / 2 - y;

  mouseMoveElems.forEach((elem) => {
    var percenX = distX / windowWidth;
    var percenY = distY / windowHeight;

    elem.style.transform = `translate(${percenX}%, ${percenY}%)`;
  });
});

var nameTag = document.getElementById("name");
var emailTag = document.getElementById("email");
var subjectTag = document.getElementById("subject");
var bodyTag = document.getElementById("body");
var sendLink = document.getElementById("contact-btn");
var msg = "";

function updateMsg() {
  console.log(bodyTag.value);
  body = bodyTag.value.replaceAll("\n", "%0A");
  console.log(body);

  msg = body + "%0A%0A" + nameTag.value + "%0A" + emailTag.value;
  return msg;
}

function updateMailLink() {
  sendLink.href = `mailto:${contactEmail}?subject=${
    subjectTag.value
  }&body=${updateMsg()}`;
}

nameTag.addEventListener("change", updateMailLink);
emailTag.addEventListener("change", updateMailLink);
subjectTag.addEventListener("change", updateMailLink);
bodyTag.addEventListener("change", updateMailLink);

updateMailLink();

document.getElementById("mail").href = `mailto:${contactEmail}`;

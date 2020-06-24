
/* js code for the background color and icon color change */

const allContent = document.querySelectorAll(".content");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");

link2.addEventListener("click", showLink2);
link1.addEventListener("click", showLink1);
function showLink2() {
  link1.style.borderBottom = "none";
  link1.style.color = "initial";
  link2.style.color = "#E7C54F";
  link2.style.borderBottom = "4px solid #E7C54F";
  allContent[0].style.display = "none";
  allContent[0].classList.remove("activegallery");
  allContent[1].classList.add("activegallery");
}

function showLink1() {
  link1.style.borderBottom = "4px solid #E7C54F";
  link2.style.color = "initial";
  link1.style.color = "#E7C54F";
  link2.style.borderBottom = "none";
  allContent[0].style.display = "block";
  allContent[1].classList.remove("activegallery");
  allContent[0].classList.add("activegallery");
}

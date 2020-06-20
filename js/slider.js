let slide = document.querySelectorAll(".slide")
let dot1 = document.getElementById("dot1")
let dot2 = document.getElementById("dot2");


function showSecondImg() {
    slide[1].style.opacity = "1";
    slide[0].style.opacity = "0";
    dot2.style.border = "7px solid #E7C54F";
    dot1.style.border = "2px solid #fff";
}

function showDefaultImg() {
  slide[0].style.opacity = "1";
  slide[1].style.opacity = "0";
    dot1.style.border = "7px solid #E7C54F";
    dot2.style.border = "2px solid #fff";
}

dot1.addEventListener("click", showDefaultImg)
dot2.addEventListener("click", showSecondImg)

window.addEventListener("DOMContentLoaded", setInterval(repeatShow, 4000));
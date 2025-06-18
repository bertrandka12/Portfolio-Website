const textArray = ["Software Developer", "Data Enthusiast", "Data Engineer", "Problem Solver"];
let textIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");
const cursor = document.querySelector(".cursor");

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 500);
});

const pageContent = document.querySelectorAll(".pageContent");
const config = document.querySelector("#config");

function toAboutMe() {
  pageContent[0].style.opacity = "1";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "0";
  config.style.top = "0vh";
  config.style.right = "5vw";
  config.style.bottom = "5vh";
  config.style.left = "0vw";
}

function toKnowledgePage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "1";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "0";
  config.style.top = "0vh";
  config.style.right = "0vw";
  config.style.bottom = "5vh";
  config.style.left = "5vw";
}

function toProjectsPage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "1";
  pageContent[3].style.opacity = "0";
  config.style.top = "5vh";
  config.style.right = "5vw";
  config.style.bottom = "0vh";
  config.style.left = "0vw";
}

function toContactPage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "1";
  config.style.top = "5vh";
  config.style.right = "0vw";
  config.style.bottom = "0vh";
  config.style.left = "5vw";
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard
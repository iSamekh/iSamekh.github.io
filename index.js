const pageContent = document.querySelectorAll(".pageContent");
const config = document.querySelector("#config");

function toAboutMe() {
  pageContent[0].style.opacity = "1";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "0";
  
  config.style.right = "5vmin";
  config.style.bottom = "5vmin";
  
}

function toKnowledgePage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "1";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "0";
  
  config.style.right = "-5vmin";
  config.style.bottom = "5vmin";
  
}

function toProjectsPage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "1";
  pageContent[3].style.opacity = "0";
  
  config.style.right = "5vmin";
  config.style.bottom = "-5vmin";
  
}

function toContactPage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "1";
  
  config.style.right = "-5vmin";
  config.style.bottom = "-5vmin";
  
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard
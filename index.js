//https://stackoverflow.com/questions/6338217/get-a-css-value-with-javascript

let inConfig = false;

function configMenu() {
  if (inConfig) {
    document.querySelector("#configMenu").style.width = "8vmin";

    inConfig = false;
  }
  else {
    document.querySelector("#configMenu").style.width = "30vmin";
    document.querySelector("#configMenu").style.boxShadow = "0 0.4vmin 0.8vmin 0 rgba(0, 0, 0, 1), 0 0 2vmin 1vmin rgba(0, 0, 0, 0.7);"

    inConfig = true;
  }
}

const pageContent = document.querySelectorAll(".pageContent");
const config = document.querySelector("#config");
const configM = document.querySelector("#configMenu");


function toAboutMe() {
  pageContent[0].style.opacity = "1";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "0";

  config.style.right = "3vmin";
  config.style.bottom = "3vmin";

  configM.style.right = "3vmin";
  configM.style.bottom = "3vmin";
}

function toKnowledgePage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "1";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "0";

  config.style.right = "-11vmin";
  config.style.bottom = "3vmin";

  configM.style.right = "-11vmin";
  configM.style.bottom = "3vmin";
}

function toProjectsPage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "1";
  pageContent[3].style.opacity = "0";

  config.style.right = "3vmin";
  config.style.bottom = "-11vmin";

  configM.style.right = "3vmin";
  configM.style.bottom = "-11vmin";
}

function toContactPage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "1";

  config.style.right = "-11vmin";
  config.style.bottom = "-11vmin";

  configM.style.right = "-11vmin";
  configM.style.bottom = "-11vmin";
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard
function themeChange() {
  let elementBody = document.body;
  elementBody.classList.toggle("dark-mode");
}

let inConfig = false;

function configMenu() {
  if (inConfig) {
    document.querySelector("#configMenu").style.width = "8vmin";
    inConfig = false;
  }
  else {
    document.querySelector("#configMenu").style.width = "40vmin";
    document.querySelector("#configMenu").style.boxShadow = "0 0.4vmin 0.8vmin 0 rgba(0, 0, 0, 1), 0 0 2vmin 1vmin rgba(0, 0, 0, 0.7);"
    inConfig = true;
  }
}

let actualPage = 0;

function pageMove(position) {

  const pageContent = document.querySelectorAll(".pageContent");
  const config = document.querySelector("#config");
  const configM = document.querySelector("#configMenu");

  pageContent[actualPage].style.opacity = "0";
  actualPage += position;
  pageContent[actualPage].style.opacity = "1";
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard

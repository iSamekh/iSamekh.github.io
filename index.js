function themeChange() {
  let elementBody = document.body;
  elementBody.classList.toggle("dark-mode");
}

let inMenu = false;
let bottomMenu = document.querySelector("#bottomMenu");

function menuSlider() {
  if (inMenu) {
    bottomMenu.style.animationName = "bottomMenuDown";
    bottomMenu.style.bottom = "-4vh";
    inMenu = false;
  }
  else {
    bottomMenu.style.animationName = "bottomMenuUp";
    bottomMenu.style.bottom = "1vh";
    inMenu = true;
  }
}

let actualPage = 0;


function pageMove(position) {

  const pageContent = document.querySelectorAll(".pageContent");
  const nav = document.querySelectorAll("a");

  nav[actualPage].classList.remove("glowText");
  pageContent[actualPage].style.opacity = "0";
  actualPage += position;
  nav[actualPage].classList.add("glowText");
  pageContent[actualPage].style.opacity = "1";
}






//addEventListener("")

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard

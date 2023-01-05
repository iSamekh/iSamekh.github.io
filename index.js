function themeChange() {
  let elementBody = document.body;
  elementBody.classList.toggle("dark-mode");
}

let inMenu = false;

const bottomMenu = document.querySelector("#bottomMenu");

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
const pages = ["#aboutMe", "#applicationsPage", "#designsPage", "#contactPage"];

console.log(actualPage.key)
function pageMove(position) {

  const pageContent = document.querySelectorAll(".pageContent");
  const nav = document.querySelectorAll("a");

  nav[actualPage].classList.remove("glowText");
  pageContent[actualPage].style.opacity = "0";

  actualPage += position;
  location.href = pages[actualPage]

  nav[actualPage].classList.add("glowText");
  pageContent[actualPage].style.opacity = "1";
}

function arrowKey(event) {
  const arrow = event.keyCode;

  switch (arrow) {

    case 37:  // Left
      if (actualPage === 1 || actualPage === 3) {
        pageMove(-1);
      }
      break;

    case 38:  // Top
      if (actualPage === 2 || actualPage === 3) {
        pageMove(-2);
      }
      break;

    case 39:  // Right
      if (actualPage === 0 || actualPage === 2) {
        pageMove(1);
      }
      break;

    case 40:  // Down
      if (actualPage === 0 || actualPage === 1) {
        pageMove(2);
      }
      break;

      case 77: // M
        menuSlider();
      break;
  }
}

document.addEventListener("keydown", arrowKey)

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard

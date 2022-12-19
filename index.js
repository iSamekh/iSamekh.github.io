function themeChange() {
  let elementBody = document.body;
  elementBody.classList.toggle("dark-mode");
  console.log("click");
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

const pageContent = document.querySelectorAll(".pageContent");
let actualPage = 0;


const config = document.querySelector("#config");
const configM = document.querySelector("#configMenu");


function pageMove(position) {
  pageContent[actualPage].style.opacity = "0";
  actualPage += position;
  pageContent[actualPage].style.opacity = "1";

  /* config.style:
   *  fixed at right and bottom, only change the values between positive and
   *  negative for directions adjustments (transition won't work in other way)
   */

  /* configM.style:
   * bottom shift between 3vh and -3vh from up to bottom
   * shift between left and right (to properly set the menu slide direction)
   */
}

function goUp() {
  pageContent[actualPage].style.opacity = "0";
  actualPage -= 2;
  pageContent[actualPage].style.opacity = "1";

  config.style.bottom = "3vh";

  configM.style.bottom = "3vh";
}

function goRight() {
  pageContent[actualPage].style.opacity = "0";
  actualPage += 1;
  pageContent[actualPage].style.opacity = "1";

  config.style.right = "";
  config.style.left = "103vw";

  configM.style.right = "";
  configM.style.left = "103vw";
}

function goDown() {
  pageContent[actualPage].style.opacity = "0";
  actualPage += 2;
  pageContent[actualPage].style.opacity = "1";

  config.style.bottom = "-11vh";

  configM.style.bottom = "-11vh";
}

function goLeft() {
  pageContent[actualPage].style.opacity = "0";
  actualPage -= 1;
  pageContent[actualPage].style.opacity = "1";

  config.style.right = "3vw";
  config.style.left = "";

  configM.style.right = "3vw";
  configM.style.left = "";
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard

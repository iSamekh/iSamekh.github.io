let inConfig = false;

function configMenu() {
	if(inConfig) {
  	document.querySelector("#configMenu").style.width = "0vmin";
    inConfig = false;
    }
    else {
    document.querySelector("#configMenu").style.width = "30vmin";
    inConfig = true;
    } 
}

const pageContent = document.querySelectorAll(".pageContent");
const config = document.querySelector("#config");

function toAboutMe() {
  pageContent[0].style.opacity = "1";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "0";
  
  config.style.right = "3vmin";
  config.style.bottom = "3vmin";
}

function toKnowledgePage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "1";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "0";
  
  config.style.right = "-13vmin";
  config.style.bottom = "3vmin";
}

function toProjectsPage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "1";
  pageContent[3].style.opacity = "0";
  
  config.style.right = "3vmin";
  config.style.bottom = "-13vmin";
}

function toContactPage() {
  pageContent[0].style.opacity = "0";
  pageContent[1].style.opacity = "0";
  pageContent[2].style.opacity = "0";
  pageContent[3].style.opacity = "1";
  
  config.style.right = "-13vmin";
  config.style.bottom = "-13vmin";
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard
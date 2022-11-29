function toAboutMe() {
  document.querySelector("#aboutMe").style.opacity = "1";
  document.querySelector("#knowledgePage").style.opacity = "0";
  document.querySelector("#projectsPage").style.opacity = "0";
  document.querySelector("#contactPage").style.opacity = "0";
}

function toKnowledgePage() {
  document.querySelector("#aboutMe").style.opacity = "0";
  document.querySelector("#knowledgePage").style.opacity = "1";
  document.querySelector("#projectsPage").style.opacity = "0";
  document.querySelector("#contactPage").style.opacity = "0";
}

function toProjectsPage() {
  document.querySelector("#aboutMe").style.opacity = "0";
  document.querySelector("#knowledgePage").style.opacity = "0";
  document.querySelector("#projectsPage").style.opacity = "1";
  document.querySelector("#contactPage").style.opacity = "0";
}

function toContactPage() {
  document.querySelector("#aboutMe").style.opacity = "0";
  document.querySelector("#knowledgePage").style.opacity = "0";
  document.querySelector("#projectsPage").style.opacity = "0";
  document.querySelector("#contactPage").style.opacity = "1";
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard
function toAboutMe() {
  document.querySelectorAll(".pageContent")[0].style.opacity = "1";
  document.querySelectorAll(".pageContent")[1].style.opacity = "0";
  document.querySelectorAll(".pageContent")[2].style.opacity = "0";
  document.querySelectorAll(".pageContent")[3].style.opacity = "0";
}

function toKnowledgePage() {
  document.querySelectorAll(".pageContent")[0].style.opacity = "0";
  document.querySelectorAll(".pageContent")[1].style.opacity = "1";
  document.querySelectorAll(".pageContent")[2].style.opacity = "0";
  document.querySelectorAll(".pageContent")[3].style.opacity = "0";
}

function toProjectsPage() {
  document.querySelectorAll(".pageContent")[0].style.opacity = "0";
  document.querySelectorAll(".pageContent")[1].style.opacity = "0";
  document.querySelectorAll(".pageContent")[2].style.opacity = "1";
  document.querySelectorAll(".pageContent")[3].style.opacity = "0";
}

function toContactPage() {
  document.querySelectorAll(".pageContent")[0].style.opacity = "0";
  document.querySelectorAll(".pageContent")[1].style.opacity = "0";
  document.querySelectorAll(".pageContent")[2].style.opacity = "0";
  document.querySelectorAll(".pageContent")[3].style.opacity = "1";
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard
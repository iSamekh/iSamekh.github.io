const container = document.documentElement;

let scrollHorizont = 0;
let scrollVert = 0;

window.onload = () => {
  document.body.onkeydown = event => {
    switch (evend.code) {
      case "ArrowRight": {
        event.preventDefault();
        scrollHorizont += window.innerWidth
        break
      }
      case "ArrowLeft": {
        event.preventDefault();
        scrollHorizont -= window.innerWidth
        break
      }
      case "ArrowUp": {
        event.preventDefault();
        scrollVert += window.innerHeight
        break
      }
      case "ArrowDown": {
        event.preventDefault();
        scrollVert -= window.innerHeight
        break
      }
    }
    container.scrollTo({
      top: scrollVert,
      left: scrollHorizont,
    })
  }
}
window.onscroll = event => {
  scrollHorizont = container.scrollLeft
  scrollVert = container.scrollTop
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard
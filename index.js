const container = document.documentElement;

let scrHorizont = 0;
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
      right: scrollHorizont,
    })
  }
}
// window.onscroll = event => {
//   scrollPage = container.scrollLeft
// }

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press

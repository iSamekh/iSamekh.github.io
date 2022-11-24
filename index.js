const container = document.documentElement;

let scrollPage = 0;

window.onload = () => {
  document.body.onkeydown = event => {
    switch (evend.code) {
      case "ArrowRight": {
        event.preventDefault();
        scrollPage += window.innerWidth
        break
      }
      case "ArrowLeft": {
        event.preventDefault();
        scrollPage -= window.innerWidth
        break
      }
      case "ArrowUp": {
        event.preventDefault();
        scrollPage += window.innerHeight
        break
      }
      case "ArrowDown": {
        event.preventDefault();
        scrollPage -= window.innerHeight
        break
      }
      container.scrollTo({
        top: 0,
        left: scrollAmount,
    })
  }
}
window.onscroll = event => {
  scrollAmount = container.scrollLeft
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press

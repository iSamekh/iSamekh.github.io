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
    }
  }
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press

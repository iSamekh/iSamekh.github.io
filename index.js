const container = document.documentElement;

let scrollPage = 0;

window.onload = () => {
  document.body.onkeydown = event => {
    switch (evend.code) {
      case "ArrowRight":
        event.preventDefault();
        scrollPage += window.innerWidth;
      case "ArrowLeft":
        event.preventDefault();
        scrollPage -= window.innerWidth;
      case "ArrowUp":
        event.preventDefault();
        scrollPage += window.innerHeight;
      case "ArrowDown":
        event.preventDefault();
        scrollPage -= window.innerHeight;
    }
  }
}

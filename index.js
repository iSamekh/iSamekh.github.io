let n = 0;

function test () {
  n++;
  document.querySelector('html').style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`; 
  document.querySelector('p').innerHTML = n + " cliques";
}

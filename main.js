const
  canvas = document.querySelector('canvas'),
  context = canvas.getContext('2d'),
  moveDistance = 10,
  height  = canvas.height,
  width = canvas.width;

let
  x = Math.floor(Math.random() * width),
  y = Math.floor(Math.random() * height);

with (context) {
  lineJoin = 'round';
  lineCap = 'round';
  lineWidth = moveDistance;

  beginPath();
  moveTo(x, y);
  lineTo(x, y);
  stroke();
}

function keyPress(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
  }
}

window.addEventListener('keydown', keyPress);
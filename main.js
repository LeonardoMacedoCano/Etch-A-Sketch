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

function draw({ key }) {
  context.beginPath();
  context.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      y -= moveDistance;
      break;
    case 'ArrowDown':
      y += moveDistance;
      break;
    case 'ArrowLeft':
      x -= moveDistance;
      break;
    case 'ArrowRight':
      x += moveDistance;
      break;
    default:
      break;
  }
  context.lineTo(x, y);
  context.stroke();
}

function keyPress(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

window.addEventListener('keydown', keyPress);
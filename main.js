const
  canvas = document.querySelector('canvas'),
  context = canvas.getContext('2d'),
  moveDistance = 10,
  height  = canvas.height,
  width = canvas.width;

let
  x = Math.floor(Math.random() * width),
  y = Math.floor(Math.random() * height),
  keyWord;

with (context) {
  lineJoin = 'round';
  lineCap = 'round';
  lineWidth = moveDistance;

  beginPath();
  moveTo(x, y);
  lineTo(x, y);
  stroke();
}

function moveDown(keyWord){
  switch (keyWord) {
    case 'ArrowUp':
      if (y > 0) {
        y -= moveDistance;
      }
      break;
    case 'ArrowDown':
      if (y < height) {
        y += moveDistance;
      }
      break;
    case 'ArrowLeft':
      if (x > 0) {
        x -= moveDistance;
      }
      break;
    case 'ArrowRight':
      if (x < width) {
        x += moveDistance;
      }
      break;
    default:
      break;
  }
}

function draw(key) {
  if (key.key == undefined) {
    keyWord = key;
  } else{
    keyWord = key.key;
  }
  context.beginPath();
  context.moveTo(x, y);
  moveDown(keyWord);
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
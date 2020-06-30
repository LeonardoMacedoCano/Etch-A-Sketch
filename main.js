const
  canvas = document.querySelector('canvas'),
  context = canvas.getContext('2d'),
  moveDistance = 10,
  height  = canvas.height,
  width = canvas.width,
  windowWidth = window.innerWidth,
  windowHeight = window.innerHeight,
  config = {
    color: "#000",
    bcolor: "#CAD4D6",
  };

let
  x = Math.floor(Math.random() * width),
  y = Math.floor(Math.random() * height),
  keyWord;

for (const key of Object.keys(config)) {
  document.documentElement.style.setProperty(`--${key}`, config[key]);
  document.getElementById(key).value = config[key];
}

with (context) {
  lineJoin = 'round';
  lineCap = 'round';
  lineWidth = moveDistance;

  beginPath();
  moveTo(x, y);
  lineTo(x, y);
  stroke();
}

function alterarValor(id, valor){
  if (id == 'color') {
    config.color = valor;
  } else if (id == 'bcolor') {
    document.documentElement.style.setProperty(`--${id}`, valor);
  }
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
  context.strokeStyle = config.color;
  context.stroke();
}

function keyPress(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

window.addEventListener('keydown', keyPress);

//Visibilidade Menu
$(document).ready(function(e){
  var windowHeight = window.innerHeight;
  $('#navigation-menu').css('height', windowHeight + 'px');

  $(document).on('click', '#showMenu', function(){
    $('#navigation-menu').css('left', '0');

    $('#showMenu, #hideMenu').css('left', '160px');
    $('#showMenu, #hideMenu').html('<i class="fa fa-chevron-left"></i>');
    $('#showMenu').attr('id', 'hideMenu');
  });

  $(document).on('click', '#hideMenu', function(){
    $('#navigation-menu').css('left', '-160px');

    $('#showMenu, #hideMenu').css('left', '0');
    $('#showMenu, #hideMenu').html('<i class="fa fa-cog"></i>');
    $('#hideMenu').attr('id', 'showMenu');
  });
});
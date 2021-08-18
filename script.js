let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //32 pixels cada quadrado
let snake = []; //array
snake[0] = { //o que vai ter dentro da cobrinha
  x: 8 * box, //posição de onde irá começar a cobrinha
  y: 8 * box,
}

let direction = "right"; 


function background() {
  context.fillStyle = "#9BC404";
  context.fillRect(0, 0, 16 * box, 16 * box); /*Estilo do canvas, fillreact
  vai desenhar o nosso retângulo, área do canvas */
}

function criarCobrinha() {
  for (i = 0; i < snake.length; i++) { /*vai percorrer todo tamanho do array,
    vai pintando a cobrinha*/
    context.fillStyle = "#000203"; //cor da cobrinha
    context.fillRect(snake[i].x, snake[i].y, box, box); //tamanho da cobrinha
  }
}

function iniciarJogo(){
  background();
  criarCobrinha();

  let snakeX = snake[0].x;//ponto de partida
  let snakeY = snake[0].y;

  if(direction == "right") snakeX += box; //vai acrescentando quadrado da cobrinha
  if(direction == "left") snakeX -= box; //
  if(direction == "up") snakeY -= box; //
  if(direction == "down") snakeY += box; //

  snake.pop(); //retira o último elemento do array

  let newHead = {
    x: snakeX,
    y: snakeY

  }

}
snake.unshift(newHead);

let jogo = setInterval(iniciarJogo, 100); /*intervalo se 100 milissegundos
para iniciar jogo*/

let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //32 pixels cada quadrado

function criarBG(){
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box); /*Estilo do canvas, fillreact
  vai desenhar o nosso retangulo */
}



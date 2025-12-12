let sistema;
let pantallas;
let botonInicio;
let soos;
let deapers = [];
let balas = [];
let tiempoInicio;
let limite = 15000;
let imgSoos;
let imgDiper;
let imgFondo;
let imgBola;
let miSonido;
let imgPortada;

function preload() {
  imgSoos  = loadImage("img/soos.png");
  imgDiper = loadImage("img/diper.png");
  imgFondo = loadImage("img/fondo.jpg");
  imgBola  = loadImage("img/bola.png");
  imgPortada = loadImage("img/portada.jpg"); 
  
  miSonido = loadSound('libraries/videojuegosonido.mp3');
}

function setup() {
  createCanvas(680, 480);
  sistema= new Sistema();
}

function draw() {
 sistema.dibujo();
}

function keyPressed() {
sistema.key();
}

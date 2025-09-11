//video: https://youtu.be/pGHTDliQcts
let imagenReferencia;
let cantidadCuadrados = 10;
let cantidadOriginal = 10;
let invertirColores = false;
let color1 = 255;
let color2 = 0;
let usarColoresAleatorios = false;
let movimientoActivo = false;

function preload() {
  imagenReferencia = loadImage("assets/img.jpg");
}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
  imageMode(CORNER);
  noLoop(); // igual que en Processing
}

function draw() {
  background(255);

 
  if (imagenReferencia) {
    image(imagenReferencia, 0, 0, 400, 400);
  } else {
    print("No se pudo cargar la imagen");
  }

 
  dibujarTodosLosBloques(400, 0, 400, 400);
}

function dibujarTodosLosBloques(xInicio, yInicio, ancho, alto) {
  let filas = 2;
  let columnas = 2;
  let anchoCelda = ancho / columnas;
  let altoCelda = alto / filas;

  for (let fila = 0; fila < filas; fila++) {
    for (let columna = 0; columna < columnas; columna++) {
      let centroX = xInicio + columna * anchoCelda + anchoCelda / 2;
      let centroY = yInicio + fila * altoCelda + altoCelda / 2;

      let direccionX = 0;
      let direccionY = 0;

      if (columna == 0 && fila == 0) {
        direccionX = 1;
        direccionY = -1;
      }
      if (columna == 1 && fila == 0) {
        direccionX = 1;
        direccionY = 1;
      }
      if (columna == 0 && fila == 1) {
        direccionX = -1;
        direccionY = -1;
      }
      if (columna == 1 && fila == 1) {
        direccionX = -1;
        direccionY = 1;
      }

      push();
      translate(centroX, centroY);
      dibujarCuadradosDesplazados(anchoCelda, direccionX, direccionY);
      pop();
    }
  }
}

function dibujarCuadradosDesplazados(tamaño, dx, dy) {
  let paso = tamaño / cantidadCuadrados;
  let ultimaX = 0;
  let ultimaY = 0;
  let ultimoTamaño = 0;

  for (let k = 0; k < cantidadCuadrados; k++) {
    if (usarColoresAleatorios) {
      fill(random(255), random(255), random(255));
    } else {
      if (k % 2 == 0)
        fill(invertirColores ? color2 : color1);
      else
        fill(invertirColores ? color1 : color2);
    }

    noStroke();
    let tam = tamaño - k * paso;
    let desplazX = dx * k * 3.5;
    let desplazY = dy * k * 3.5;

    rect(desplazX, desplazY, tam, tam);

    if (k == cantidadCuadrados - 2) {
      ultimaX = desplazX;
      ultimaY = desplazY;
      ultimoTamaño = tam;
    }
  }

  // cuadrado negro al centro
  fill(invertirColores ? color1 : color2);
  let tamNegro = ultimoTamaño * 0.7;
  rect(ultimaX, ultimaY, tamNegro, tamNegro);

  // cuadrado blanco al centro
  fill(invertirColores ? color2 : color1);
  let tamBlanco = ultimoTamaño * 0.28;
  rect(ultimaX, ultimaY, tamBlanco, tamBlanco);
}

// -------- EVENTOS DE TECLADO ----------
function keyPressed() {
  if (key === 'c') {
    invertirColores = !invertirColores;
  } else if (key === 'r') {
    cantidadCuadrados = cantidadOriginal;
    invertirColores = false;
    usarColoresAleatorios = false;
    color1 = 255;
    color2 = 0;
    movimientoActivo = false;
  } else if (key === '1') {
    usarColoresAleatorios = false;
    color1 = 255;
    color2 = 0;
  } else if (key === '2') {
    usarColoresAleatorios = true;
  } else if (key === '3') {
    usarColoresAleatorios = false;
    color1 = 0;
    color2 = 255;
  }
  redraw();
}

// -------- EVENTOS DE MOUSE ----------
function mousePressed() {
  movimientoActivo = true;
}

function mouseMoved() {
  if (movimientoActivo) {
    cantidadCuadrados = calcularCantidadSegunMouse(mouseX);
    redraw();
  }
}

// -------- FUNCIÓN AUXILIAR ----------
function calcularCantidadSegunMouse(posX) {
  let resultado = int(map(posX, 0, width, 2, 20));
  if (resultado < 2) resultado = 2;
  if (resultado > 20) resultado = 20;
  return resultado;
}

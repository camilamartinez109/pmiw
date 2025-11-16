//tpfinal recuperatorio Juana y Camila
//link a video https://www.youtube.com/watch?v=JxwlVVeQwoI
      
let imgs = [];
let textos = [];
let escena = 0;
let sonidoPasar;

let siguientes = [
  1, // 0
  2, // 1
  [3, 4], // 2 → decision 1
  5, // 3
  6, // 4
  8, // 5
  7, // 6
  9, // 7
  [14, 16], // 8 → decision 2
  [12, 10], // 9 → decision 3 
  11, // 10 → final 1
  -1, // 11 → reinicio
  13, // 12 → final 2
  -1, // 13 → reinicio
  15, // 14
  -1, // 15 → reinicio
  17, // 16
  -1          // 17 → reinicio
];
let textosOpciones = {
  2:["Preparar una fiesta", "Impresionar a Wendy"],
  8:["Dejarlos que sigan", "Detenerlos"],
  9:["Enfrentarlos", "Esconderlos"]
  };


function preload() {

  // cargar 18 imagenes
  for (let i = 0; i < 19; i++) {
    imgs[i] = loadImage("data/img" + (i+1) + ".jpg");
  }

  // txt escena
  textos = [
    "Gravity Falls: Aventura de Fiesta",
    "Dipper encuentra la fotocopiadora mágica.",
    "Ayudalo a decidir para qué puede usarla...",
    "Dipper crea clones para organizar toda la fiesta.",
    "Dipper crea un clon para que impresione a Wendy.",
    "Los clones empiezan a hacer cosas extrañas.",
    "Dipper se da cuenta que es un error, el clon actúa extrañamente.",
    "Dipper se da cuenta que es un error, el clon actúa extrañamente.",
    "Dipper se replantea si es buena idea  y piensa que hacer...",
    "Aparece Wendy.. ¿Qué debería hacer Dipper?",
    "Los Clones se rebelan",
    "Y todo termina en un gran apagón, dejando a todos en la oscuridad. FINAL",
    "Wendy se encuentra confundida y se va",
    "Los clones siguen bailando solos",
    "Caos en la fiesta, los clones se multiplican",
    "Fiesta arruinada, terminan todos enojados con Dipper",
    "Aparece Soos con agua y pone orden",
    "La fiesta continúa tranquila y Dipper aprende a no abusar de la máquina",
    "CRÉDITOS"
  ];

  sonidoPasar = loadSound("libraries/pasar.mp3");
}


function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER);
  textSize(18);
}

function draw() {

 
  if (escena === 18) {
    mostrarPantallaCreditos();
    return;
  }

  // img de fondo
  image(imgs[escena], 0, 0, width, height);

  // pantalla inicial
  if (escena === 0) {
    mostrarPantallaInicial();
    return;
  }

  // SI NO es una decisión  mostrar panel
  if (!Array.isArray(siguientes[escena])) {

    fill(0, 150);
    rect(0, height-80, width, 80);

    fill(255);
    text(textos[escena], width/2, height-40);
  }


  mostrarBotones();
}


//pantalla de inicio

function mostrarPantallaInicial() {

  
  fill(0, 170);
  rect(0, height - 200, width, 200);

  
  fill(255);
  text("Gravity Falls: Aventura de Fiesta", width/2, height - 160);

  // bot comienzo
  fill(110, 130, 255);
  rect(width/2 - 180, height - 120, 150, 55, 12);
  fill(255);
  textSize(18);
  text("Comenzar", width/2 - 105, height - 92);

  // bot cred 
  fill(240, 110, 110);
  rect(width/2 + 30, height - 120, 150, 55, 12);
  fill(255);
  text("Créditos", width/2 + 105, height - 92);
}


// bot segun esc

function mostrarBotones() {

  let s = siguientes[escena];

  //fin
  if (s === -1) {
    fill(255, 80, 80);
    ellipse(width-50, height-50, 60);
    fill(255);
    text("↻", width-50, height-50);
    return;
  }
  
    //funciones con  parametro ;)
  if (typeof s === "number") {
    xfill(110, 130, 255);
    ellipse(width-50, height-50, 60);
    fill(255);
    triangle(width-60, height-60, width-60, height-40, width-35, height-50);
    return;
  }

  //decisiones
  if (Array.isArray(s)) {

    // recuadro para txt
    fill(0, 160);
    rect(0, height - 220, width, 220);

    // txt narrativo
    fill(255);
    textSize(18);
    text(textos[escena], width/2, height - 190);

    // boton 1
    fill(110, 120, 255);
    rect(width/2 - 200, height - 150, 400, 55, 20);

    // Botón 2
    fill(110, 120, 255);
    rect(width/2 - 200, height - 80, 400, 55, 20);

    // txt de opciones
    fill(255);
    textSize(24);

    let opciones = textosOpciones[escena];
    if (opciones) {
      text(opciones[0], width/2, height - 122);
      text(opciones[1], width/2, height - 52);
    }

    textSize(22); // restaurar a tamaño estándar
  }
}


// para click

function mousePressed() {

  let antes = escena;

  //esc inicial
  if (escena === 0) {

    // boton de comenzar
    if (
      mouseX > width/2 - 180 &&
      mouseX < width/2 - 30 &&
      mouseY > height - 120 &&
      mouseY < height - 65
      ) {
      escena = 1;
      return;
    }


    // boton cred
    if (
      mouseX > width/2 + 30 &&
      mouseX < width/2 + 180 &&
      mouseY > height - 120 &&
      mouseY < height - 65
      ) {
      escena = 18;
      return;
    }
  }
  //cred
  if (escena === 18) {
    // Botón Volver
    if (
      mouseX > width/2 - 60 &&
      mouseX < width/2 + 140 &&
      mouseY > height - 110 &&
      mouseY < height - 60
      ) {
      escena = 0;
    }

    return;
  }

  
  let s = siguientes[escena];

  // fin y reincia
  if (s === -1) {
    let d = dist(mouseX, mouseY, width-50, height-50);
    if (d < 30) escena = 0;
  }

  // avanzar
  else if (typeof s === "number") {
    let d = dist(mouseX, mouseY, width-50, height-50);
    if (d < 30) escena = s;
  }

  // decisiones
  else if (Array.isArray(s)) {

    // Botón 1
    if (
      mouseX > width/2 - 200 &&
      mouseX < width/2 + 200 &&
      mouseY > height - 150 &&
      mouseY < height - 95
      ) {
      escena = s[0];
    }

    // boton 2
    else if (
      mouseX > width/2 - 200 &&
      mouseX < width/2 + 200 &&
      mouseY > height - 80 &&
      mouseY < height - 25
      ) {
      escena = s[1];
    }
  }


  // para q suene solo cuando cambia esc
  if (escena !== antes) {
    userStartAudio();
    if (sonidoPasar.isPlaying()) sonidoPasar.stop();
    sonidoPasar.play();
  }
}

// pantalla para cred
function mostrarPantallaCreditos() {

  background(255, 205, 210);

  fill(60);
  stroke(0);
  strokeWeight(2);
  rect(width/2 - 300, 40, 600, 500, 20);

  noStroke();
  fill(255);
  text("Gravity Falls", width/2, 100);

  textAlign(LEFT, TOP);
  let x = width/2 - 260;
  let y = 160;

  text("PROYECTO: Aventura de Fiesta", x, y);

  y += 60;
  text("Integrantes:", x, y);

  y += 35;
  text("- Juana Lopez", x, y);
  y += 28;
  text("Legajo: 119070/7", x, y);

  y += 40;
  text("- Camila Martinez", x, y);
  y += 28;
  text("Legajo: 122783/1", x, y);

  y += 50;
  text("Creador Original:", x, y);
  y += 28;
  text("- Alex Hirsch", x, y);

  textAlign(CENTER, CENTER);

  // Botón para volver al inicio
  fill(120, 140, 255);
  stroke(40, 40, 100);
  rect(width/2 - 60, height - 110, 200, 50, 12);

  noStroke();
  fill(255);
  textSize(22);
  text("Volver al Inicio", width/2 + 40, height - 85);
}

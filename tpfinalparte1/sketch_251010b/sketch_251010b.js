// Tpfinalparte1
// Juana Lopez y Camila Martinez
// link a video: https://youtu.be/z6r6W2uJP2g


let imgInicio, imgFotocopiadora, imgDecisionClonarse, imgPrepararFiesta;
let imgClonesEmocionan, imgErrorClones, imgCaosFiesta, imgFiestaArruinada;
let imgSoos, imgFiestaTranquila, imgImpresionarWendy, imgDipperClonado;
let imgDisputaClones, imgDecisionWendy, imgEnfrentaClones, imgEscondeClones;
let imgApagonFinal, imgFinalBailan;

let efectoPasar;
let escena = 0; 
//variable escenas
const ESCENAS = {
    INICIO: 0,
    CREDITOS: 99, 
    ENCUENTRA_FOTOCOPIADORA: 1,
    DECISION_CLONARSE: 2,
    PREPARAR_FIESTA: 3, CLONES_SE_EMOCIONAN: 4, DESCUBRE_ERROR_CLONES: 5,
    CAOS_FIESTA: 6, FIESTA_ARUINADA: 7, APARECE_SOOS: 8, FIESTA_TRANQUILA: 9,
    IMPRESIONAR_WENDY: 10, DIPPER_CLONADO_WENDY: 11, DISPUTA_CLONES_WENDY: 12,
    DECISION_WENDY_CLONES: 13, ENFRENTA_CLONES_WENDY: 14, FINAL_CLONES_BAILAN: 15,
    ESCONDE_CLONES_WENDY: 16, APAGON_FINAL: 17,
};


function preload() {
    imgInicio = loadImage("Assets/img1.jpg");
    imgFotocopiadora = loadImage("Assets/img2.jpg");
    imgDecisionClonarse = loadImage("Assets/img3.jpg");
    imgPrepararFiesta = loadImage("Assets/img4.jpg");
    imgImpresionarWendy = loadImage("Assets/img5.jpg");
    imgClonesEmocionan = loadImage("Assets/img6.jpg");
    imgDipperClonado = loadImage("Assets/img7.jpg");
    imgDisputaClones = loadImage("Assets/img8.jpg");
    imgErrorClones = loadImage("Assets/img9.jpg");
    imgDecisionWendy = loadImage("Assets/img10.jpg");
    imgEscondeClones = loadImage("Assets/img11.jpg");
    imgApagonFinal = loadImage("Assets/img12.jpg");
    imgEnfrentaClones = loadImage("Assets/img13.jpg");
    imgFinalBailan = loadImage("Assets/img14.jpg");
    imgCaosFiesta = loadImage("Assets/img15.jpg");
    imgFiestaArruinada = loadImage("Assets/img16.jpg");
    imgSoos = loadImage("Assets/img17.jpg");
    imgFiestaTranquila = loadImage("Assets/img18.jpg");

    efectoPasar = loadSound('Assets/pasar.mp3');
}

function setup() {
    createCanvas(640, 480);
    textAlign(CENTER, TOP);
    textSize(18);
    textFont('Arial');
}

function dibujarImagen(img) {
    rectMode(CORNER);
    if (img) { image(img, 0, 0, width, height); }
}

function dibujarNarrativa(texto, conOpciones = false) {
    let textoY;
    if (conOpciones) {
        fill(0, 0, 0, 150); rectMode(CORNER);
        rect(width / 2 - 250, height - 128, 500, 35, 8);
        textoY = height - 120;
    } else {
        fill(0, 0, 0, 220); rectMode(CORNER); rect(0, height - 80, width, 80);
        textoY = height - 55;
    }
    fill(255); textSize(18); textAlign(CENTER, TOP);
    text(texto, width / 2, textoY);
}

function dibujarFlechaAvance() {
    const flechaX = width - 40; const flechaY = height - 40; const flechaTamano = 30;
    fill(100, 100, 255); noStroke(); ellipse(flechaX, flechaY, flechaTamano);
    fill(255);
    triangle(flechaX - 5, flechaY - 8, flechaX - 5, flechaY + 8, flechaX + 8, flechaY);
}

function dibujarBotonOpcion(texto, index, totalOpciones) {
    const alturaBoton = 35;
    const yBotonInicio = height - 80;
    const anchoBoton = 300;

    let yBoton;
    if (totalOpciones === 1) {
        yBoton = height - 40;
    } else {
        yBoton = yBotonInicio + index * (alturaBoton + 10);
    }

    fill(100, 100, 255, 200); rectMode(CENTER); rect(width / 2, yBoton, anchoBoton, alturaBoton, 8);
    textAlign(CENTER, CENTER); fill(255); textSize(18); text(texto, width / 2, yBoton);
    textAlign(CENTER, TOP);
}

function areaBotonCentral(cX, cY, an, al) {
    return mouseX > cX - an / 2 && mouseX < cX + an / 2 && mouseY > cY - al / 2 && mouseY < cY + al / 2;
}

function areaBoton(x, y, an, al) {
    return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

const reproducirEfecto = () => {
    if (efectoPasar && efectoPasar.isLoaded()) {
        efectoPasar.stop();
        efectoPasar.play();
    }
};

function dibujarPantallaInicio() {
    rectMode(CORNER);
    if (imgInicio) { image(imgInicio, 0, 0, width, height); }
    fill(0, 0, 0, 180); rect(0, height - 120, width, 120);
    fill(255); textSize(28); text("Gravity Falls: Aventura de Fiesta", width / 2, height - 110);
    const yBoton = height - 50; const alturaBoton = 40; const anchoBoton = 200;
    const xBotonComenzar = width / 4;
    fill(100, 100, 255, 200); rectMode(CENTER); rect(xBotonComenzar, yBoton, anchoBoton, alturaBoton, 8);
    fill(255); textSize(20); text("Comenzar", xBotonComenzar, yBoton - 8);
    const xBotonCreditos = width * 3 / 4;
    fill(255, 100, 100, 200); rectMode(CENTER); rect(xBotonCreditos, yBoton, anchoBoton, alturaBoton, 8);
    fill(255); textSize(20); text("Créditos", xBotonCreditos, yBoton - 8);
}

function dibujarPantallaCreditos() {
    background(255, 204, 204); rectMode(CORNER);
    fill(50, 50, 50, 220); rect(width / 2 - 200, 50, 400, height - 100, 10);
    fill(255); textSize(36); text("Gravity Falls", width / 2, 80);
    textSize(20); textAlign(LEFT, TOP);
    const textoCreditos = "PROYECTO: Aventura de Fiesta\n\n" + "Integrantes:\n" +
        "  - Juana Lopez\n" + "    Número de legajo: 119070/7 \n\n" +
        "  - Camila Martinez\n" + "    Número de legajo: 122783/1\n\n" +
        "CREADOR ORIGINAL:\n" + "  - Alex Hirsch\n" +
        "--------------------------------------\n" + "Basado en el episodio 7 'Doble Dipper'.";
    text(textoCreditos, width / 2 - 180, 140, 360, height - 200);
    fill(100, 100, 255, 200); rectMode(CENTER);
    const yBoton = height - 40; rect(width / 2, yBoton, 300, 40, 8);
    textAlign(CENTER, CENTER); fill(255); textSize(18); text("Volver al Inicio", width / 2, yBoton);
    textAlign(CENTER, TOP);
}

function draw() {
    background(0, 0);

    if (escena === ESCENAS.INICIO) {
        dibujarPantallaInicio();
    } else if (escena === ESCENAS.CREDITOS) {
        dibujarPantallaCreditos();
    }

    else if (escena === ESCENAS.ENCUENTRA_FOTOCOPIADORA) {
        dibujarImagen(imgFotocopiadora);
        dibujarNarrativa("Dipper encuentra la fotocopiadora mágica.");
        dibujarFlechaAvance();
    } else if (escena === ESCENAS.DECISION_CLONARSE) {
        dibujarImagen(imgDecisionClonarse);
        dibujarNarrativa("Ayudalo a decidir para qué puede usarla...", true);
        dibujarBotonOpcion("Preparar una fiesta", 0, 2);
        dibujarBotonOpcion("Impresionar a Wendy", 1, 2);
    } else if (escena === ESCENAS.PREPARAR_FIESTA) {
        dibujarImagen(imgPrepararFiesta);
        dibujarNarrativa("Dipper crea clones para organizar la música, los juegos y la comida.");
        dibujarFlechaAvance();
    } else if (escena === ESCENAS.CLONES_SE_EMOCIONAN) {
        dibujarImagen(imgClonesEmocionan);
        dibujarNarrativa("Los clones se emocionan demasiado y hacen cosas extrañas.");
        dibujarFlechaAvance();
    } else if (escena === ESCENAS.DESCUBRE_ERROR_CLONES) {
        dibujarImagen(imgErrorClones);
        dibujarNarrativa("Dipper se replantea si es buena idea y piensa que hacer...", true);
        dibujarBotonOpcion("Dejarlos que sigan", 0, 2);
        dibujarBotonOpcion("Detenerlos", 1, 2);
    } else if (escena === ESCENAS.CAOS_FIESTA) {
        dibujarImagen(imgCaosFiesta);
        dibujarNarrativa("Caos en la fiesta, los clones se multiplican");
        dibujarFlechaAvance();
    } else if (escena === ESCENAS.FIESTA_ARUINADA) {
        dibujarImagen(imgFiestaArruinada);
        dibujarNarrativa("Fiesta arruinada, terminan todos enojados con Dipper", true);
        dibujarBotonOpcion("Volver al inicio", 2, 1);
    } else if (escena === ESCENAS.APARECE_SOOS) {
        dibujarImagen(imgSoos);
        dibujarNarrativa("Aparece Soos con agua y pone orden");
        dibujarFlechaAvance();
    } else if (escena === ESCENAS.FIESTA_TRANQUILA) {
        dibujarImagen(imgFiestaTranquila);
        dibujarNarrativa("La fiesta continúa tranquila y Dipper aprende a no abusar de la máquina", true);
        dibujarBotonOpcion("Volver al inicio", 2, 1);
    }

    else if (escena === ESCENAS.IMPRESIONAR_WENDY) {
        dibujarImagen(imgImpresionarWendy);
        dibujarNarrativa("Dipper crea un clon para que impresione a Wendy por él.");
        dibujarFlechaAvance();
    } else if (escena === ESCENAS.DIPPER_CLONADO_WENDY) {
        dibujarImagen(imgDipperClonado);
        dibujarNarrativa("Dipper se da cuenta que es un error, el clon actúa extrañamente.");
        dibujarFlechaAvance();
    } else if (escena === ESCENAS.DISPUTA_CLONES_WENDY) {
        dibujarImagen(imgDisputaClones);
        dibujarNarrativa("Aparecen más clones y discuten quién es el verdadero.");
        dibujarFlechaAvance();
    } else if (escena === ESCENAS.DECISION_WENDY_CLONES) {
        dibujarImagen(imgDecisionWendy);
        dibujarNarrativa("Aparece Wendy.. ¿Qué debería hacer Dipper?", true);
        dibujarBotonOpcion("Enfrentarlos", 0, 2);
        dibujarBotonOpcion("Esconderlos", 1, 2);
    } else if (escena === ESCENAS.ENFRENTA_CLONES_WENDY) {
        dibujarImagen(imgEnfrentaClones);
        dibujarNarrativa("Wendy se encuentra confundida y se va");
        dibujarFlechaAvance();
    } else if (escena === ESCENAS.FINAL_CLONES_BAILAN) {
        dibujarImagen(imgFinalBailan);
        dibujarNarrativa("Los clones siguen bailando solos", true);
        dibujarBotonOpcion("volver al inicio", 2, 1);
    } else if (escena === ESCENAS.ESCONDE_CLONES_WENDY) {
        dibujarImagen(imgEscondeClones);
        dibujarNarrativa("Los Clones se rebelan");
        dibujarFlechaAvance();
    } else if (escena === ESCENAS.APAGON_FINAL) {
        dibujarImagen(imgApagonFinal);
        dibujarNarrativa("Y todo termina en un gran apagón, dejando a todos en la oscuridad. FINAL", true);
        dibujarBotonOpcion("Volver al inicio", 2, 1);
    }
}

function mouseClicked() {
    const yBotonPortada = height - 50; const alturaBotonPortada = 40; const anchoBotonPortada = 200;
    const xBotonComenzar = width / 4; const xBotonCreditos = width * 3 / 4;

    const flechaX = width - 40; const flechaY = height - 40; const flechaTamano = 30;
    const clickEnFlecha = dist(mouseX, mouseY, flechaX, flechaY) < flechaTamano / 2;

    const anchoBoton = 300;
    const alturaBoton = 35;
    const yBotonInicio = height - 80;

    if (escena === ESCENAS.INICIO) {
        if (areaBoton(xBotonComenzar - anchoBotonPortada / 2, yBotonPortada - alturaBotonPortada / 2, anchoBotonPortada, alturaBotonPortada)) {
            reproducirEfecto();
            escena = ESCENAS.ENCUENTRA_FOTOCOPIADORA;
            return;
        }
        else if (areaBoton(xBotonCreditos - anchoBotonPortada / 2, yBotonPortada - alturaBotonPortada / 2, anchoBotonPortada, alturaBotonPortada)) {
            reproducirEfecto();
            escena = ESCENAS.CREDITOS;
            return;
        }
    }

    if (escena === ESCENAS.CREDITOS) {
        const yBotonCreditos = height - 40; const alturaBotonCreditos = 40; const anchoBotonCreditos = 300;
        if (areaBotonCentral(width / 2, yBotonCreditos, anchoBotonCreditos, alturaBotonCreditos)) {
            reproducirEfecto();
            escena = ESCENAS.INICIO;
            return;
        }
    }

    else if (clickEnFlecha) { 
      
        if (escena === ESCENAS.ENCUENTRA_FOTOCOPIADORA) {
            reproducirEfecto();
            escena = ESCENAS.DECISION_CLONARSE;
            return;
        } else if (escena === ESCENAS.PREPARAR_FIESTA) {
            reproducirEfecto();
            escena = ESCENAS.CLONES_SE_EMOCIONAN;
            return;
        } else if (escena === ESCENAS.CLONES_SE_EMOCIONAN) {
            reproducirEfecto();
            escena = ESCENAS.DESCUBRE_ERROR_CLONES;
            return;
        } else if (escena === ESCENAS.CAOS_FIESTA) {
            reproducirEfecto();
            escena = ESCENAS.FIESTA_ARUINADA;
            return;
        } else if (escena === ESCENAS.APARECE_SOOS) {
            reproducirEfecto();
            escena = ESCENAS.FIESTA_TRANQUILA;
            return;
        } else if (escena === ESCENAS.IMPRESIONAR_WENDY) {
            reproducirEfecto();
            escena = ESCENAS.DIPPER_CLONADO_WENDY;
            return;
        } else if (escena === ESCENAS.DIPPER_CLONADO_WENDY) {
            reproducirEfecto();
            escena = ESCENAS.DISPUTA_CLONES_WENDY;
            return;
        } else if (escena === ESCENAS.DISPUTA_CLONES_WENDY) {
            reproducirEfecto();
            escena = ESCENAS.DECISION_WENDY_CLONES;
            return;
        } else if (escena === ESCENAS.ENFRENTA_CLONES_WENDY) {
            reproducirEfecto();
            escena = ESCENAS.FINAL_CLONES_BAILAN;
            return;
        } else if (escena === ESCENAS.ESCONDE_CLONES_WENDY) {
            reproducirEfecto();
            escena = ESCENAS.APAGON_FINAL;
            return;
        }
    }

    else if (escena === ESCENAS.DECISION_CLONARSE) {
        const yBoton1 = yBotonInicio;
        const yBoton2 = yBotonInicio + (alturaBoton + 10);

        if (areaBotonCentral(width / 2, yBoton1, anchoBoton, alturaBoton)) {
            reproducirEfecto();
            escena = ESCENAS.PREPARAR_FIESTA;
            return;
        }
        else if (areaBotonCentral(width / 2, yBoton2, anchoBoton, alturaBoton)) {
            reproducirEfecto();
            escena = ESCENAS.IMPRESIONAR_WENDY;
            return;
        }
    }
    else if (escena === ESCENAS.DESCUBRE_ERROR_CLONES) {
        const yBoton1 = yBotonInicio;
        const yBoton2 = yBotonInicio + (alturaBoton + 10);

        if (areaBotonCentral(width / 2, yBoton1, anchoBoton, alturaBoton)) {
            reproducirEfecto();
            escena = ESCENAS.CAOS_FIESTA;
            return;
        }
        else if (areaBotonCentral(width / 2, yBoton2, anchoBoton, alturaBoton)) {
            reproducirEfecto();
            escena = ESCENAS.APARECE_SOOS;
            return;
        }
    }
    else if (escena === ESCENAS.DECISION_WENDY_CLONES) {
        const yBoton1 = yBotonInicio;
        const yBoton2 = yBotonInicio + (alturaBoton + 10);

        if (areaBotonCentral(width / 2, yBoton1, anchoBoton, alturaBoton)) {
            reproducirEfecto();
            escena = ESCENAS.ENFRENTA_CLONES_WENDY;
            return;
        }
        else if (areaBotonCentral(width / 2, yBoton2, anchoBoton, alturaBoton)) {
            reproducirEfecto();
            escena = ESCENAS.ESCONDE_CLONES_WENDY;
            return;
        }
    }

    else if (escena === ESCENAS.FIESTA_ARUINADA || escena === ESCENAS.FIESTA_TRANQUILA ||
        escena === ESCENAS.FINAL_CLONES_BAILAN || escena === ESCENAS.APAGON_FINAL) {

        const yBotonUnico = height - 40;
        if (areaBotonCentral(width / 2, yBotonUnico, anchoBoton, alturaBoton)) {
            reproducirEfecto();
            escena = ESCENAS.INICIO;
            return;
        }
    }
}

class Pantallas {

  constructor() {
    this.estado = 0;
  }

  cambiar(nuevo) {
    this.estado = nuevo;
  }

  update() {
    if (this.estado === 3) { 
      let tiempoRest = limite - (millis() - tiempoInicio);
      if (tiempoRest <= 0) {
        this.cambiar(5); 
      }
    }
  }

  mostrar() {
    switch (this.estado) {
      case 0: this.inicio(); break;
      case 1: this.creditos(); break;
      case 2: this.instrucciones(); break;
      case 3: this.juego(); break;
      case 4: this.ganaste(); break;
      case 5: this.perdiste(); break;
    }
  }


  inicio() {
    image(imgPortada, 0, 0, width, height);

    textAlign(CENTER);
    fill(255);
    textSize(36);
    text("GRAVITY FALLS SHOOTER", width/2, height/2 - 80);
    textSize(20);
    text("Soos debe detener a los Deaper", width/2, height/2 - 30);
    text("Apretá el botón para empezar", width/2, height/2 + 120);
  }

  creditos() {
    textAlign(CENTER);
    fill(255);
    textSize(36);
    text("CRÉDITOS", width/2, 100);
    textSize(20);
    text("Juego creado por Camila Martinez y Juana Lopez", width/2, height/2);
    text("Presioná B para volver", width/2, height - 40);
  }

  instrucciones() {
    textAlign(CENTER);
    fill(255);
    textSize(32);
    text("INSTRUCCIONES", width/2, 80);
    textSize(22);
    text("WASD para moverte\nESPACIO para disparar", width/2, 200);
    text("Presioná J para empezar", width/2, 420);
  }

 juego() {
  image(imgFondo, 0, 0, width, height);

  fill(255);
  textSize(18);
  let resto = max(0, (limite - (millis() - tiempoInicio)) / 1000);
  text("Tiempo: " + resto.toFixed(1), 80, 30);
}


  ganaste() {
    textAlign(CENTER);
    fill(0, 255, 0);
    textSize(40);
    text("¡GANASTE!", width/2, height/2);
    textSize(20);
    fill(255);
    text("Presioná R para reiniciar", width/2, height/2 + 60);
  }

  perdiste() {
    textAlign(CENTER);
    fill(255, 0, 0);
    textSize(40);
    text("PERDISTE", width/2, height/2);
    textSize(20);
    fill(255);
    text("Presioná R para reiniciar", width/2, height/2 + 60);
  }
}

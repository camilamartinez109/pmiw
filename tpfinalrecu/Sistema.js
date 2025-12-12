class Sistema {
  constructor() {
    this.limite = 15000;
    this.tiempoInicio = 0;
    this.pantallas = new Pantallas(this);

    this.botonInicio = new BotonInicio(() => {
      this.pantallas.cambiar(2);
      if (!miSonido.isPlaying()) {
        miSonido.setLoop(true);
        miSonido.play();
      }
    });

    this.soos = new Soos(80, height / 2);
    this.deapers = [];
    this.balas = [];
  }

  dibujo() {
    background(20);

    this.pantallas.update();
    this.pantallas.mostrar();

    if (this.pantallas.estado === 0) this.botonInicio.show();
    else this.botonInicio.hide();

    if (this.pantallas.estado === 3) {

      this.soos.mover();
      this.soos.mostrar();

      for (let d of this.deapers) {
        d.mover();
        d.mostrar();
        if (this.soos.choca(d)) {
          this.pantallas.cambiar(5);
        }
      }

      for (let i = this.balas.length - 1; i >= 0; i--) {
        let b = this.balas[i];
        b.update();
        b.mostrar();

        for (let j = this.deapers.length - 1; j >= 0; j--) {
          if (b.choca(this.deapers[j])) {
            this.deapers.splice(j, 1);
            this.balas.splice(i, 1);
            break;
          }
        }

        if (b.x > width) {
          this.balas.splice(i, 1);
        }
      }

      if (this.deapers.length === 0) {
        this.pantallas.cambiar(4);
      }
    }
  }

  key() {
    if (!this.pantallas) return;

    if (this.pantallas.estado === 3 && key === " ") {
      this.balas.push(new Bola(this.soos.x + 40, this.soos.y));
    }

    if (this.pantallas.estado === 1 && key === "b") {
      this.pantallas.cambiar(0);
    }

    if (this.pantallas.estado === 2 && key === "j") {
      this.tiempoInicio = millis();
      this.pantallas.cambiar(3);
      this.crearDeapers();
    }

    if ((this.pantallas.estado === 4 || this.pantallas.estado === 5) && key === "r") {
      this.reiniciarJuego();
    }

    if (this.pantallas.estado === 0 && key === "c") {
      this.pantallas.cambiar(1);
    }
  }

  crearDeapers() {
    this.deapers = [];
    for (let i = 0; i < 10; i++) {
      this.deapers.push(new Deaper(
        random(width / 2, width - 50),
        random(50, height - 50)
      ));
    }
  }

  reiniciarJuego() {
    this.balas = [];
    this.crearDeapers();
    this.tiempoInicio = millis();
    this.pantallas.cambiar(3);
  }
}

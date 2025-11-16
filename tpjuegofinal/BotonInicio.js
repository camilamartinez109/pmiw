class BotonInicio {
  constructor(callback) {
    this.callback = callback;

    this.boton = createButton("EMPEZAR");
    this.boton.size(150, 55);

    this.boton.style("font-size", "22px");
    this.boton.style("background", "#3a8bfd");
    this.boton.style("color", "white");
    this.boton.style("border-radius", "10px");
    this.boton.style("border", "none");
    this.boton.style("cursor", "pointer");

  
    this.boton.position(-500, -500);

    this.boton.mousePressed(() => {
      this.callback();   
      this.hide();
    });
  }

  show() {
    this.boton.position(width/2 - 75, height/2 + 40);
    this.boton.show();
  }

  hide() {
    this.boton.hide();
  }
}

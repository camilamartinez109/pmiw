class Bola {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vel = 8;
    this.tam = 40;
  }

  update() {
    this.x += this.vel;
  }

  mostrar() {
    image(imgBola, this.x - this.tam/2, this.y - this.tam/2, this.tam, this.tam);
  }

  choca(deaper) {
    let d = dist(this.x, this.y, deaper.x, deaper.y);
    return d < (this.tam/2 + deaper.tam/2);
  }
}

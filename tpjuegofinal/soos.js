class Soos {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vel = 4;

    this.w = 80;
    this.h = 80;
  }

  mover() {
    if (keyIsDown(87)) this.y -= this.vel;
    if (keyIsDown(83)) this.y += this.vel;
    if (keyIsDown(65)) this.x -= this.vel;
    if (keyIsDown(68)) this.x += this.vel;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  mostrar() {
    image(imgSoos, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
  }

  //  NUEVA FUNCIÓN
  choca(deaper) {
    let d = dist(this.x, this.y, deaper.x, deaper.y);
    return d < (this.w/2 + deaper.tam/2);
  }
}

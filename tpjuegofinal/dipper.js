class Deaper {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.vx = random(-2, 2);
    this.vy = random(-2, 2);

    this.w = 70;
    this.h = 70;
    this.tam = 40;
  }

  mover() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx += random(-0.2, 0.2);
    this.vy += random(-0.2, 0.2);

    this.vx = constrain(this.vx, -3, 3);
    this.vy = constrain(this.vy, -3, 3);

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  mostrar() {
    image(imgDiper, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
  }
}

class Person {
  constructor() {
    this.r = 200;
    this.x = 15;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;


  }
  hits(virus) {

    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = virus.x + virus.r * 0.5;
    let y2 = virus.y + virus.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, virus.r);
  }
  
  hits(soap) {

    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = soap.x + soap.r * 0.5;
    let y2 = soap.y + soap.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, soap.r);
  }


  jump() {
 if (this.y == height - this.r) {
    this.vy = -35;
 }
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);

  }
  show() {
    image(pImg, this.x, this.y, this.r, this.r);


  }

}
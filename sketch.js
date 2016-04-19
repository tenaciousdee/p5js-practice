var Particle = function (position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
  this.position = position.copy();
};

Particle.prototype.run = function () {
  this.update();
  this.display();
  this.intersects();
};

Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(-0.1);
  if (this.position.x < 0) this.position.x = width;
  if (this.position.x > width) this.position.x = 0;
  if (this.position.y < 0) this.position.y = height;
  if (this.position.y > height) this.position.y = 0;
};

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

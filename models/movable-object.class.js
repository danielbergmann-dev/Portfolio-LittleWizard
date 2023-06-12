class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false; // für die Richtung des Characters
  speedY = 0;
  accerlation = 4.0;
  energy = 100;
  lastHit = 0;
  isFalling = false;
  onGround = false;

  isJumpingOn(mo) {
    const isAbove = this.y + this.hitboxHeight <= mo.y + mo.hitboxOffsetY;
    const isHorizontalOverlap = this.x + this.hitboxOffsetX + this.hitboxWidth > mo.x + mo.hitboxOffsetX &&
      this.x + this.hitboxOffsetX < mo.x + mo.hitboxOffsetX + mo.hitboxWidth;
    return isAbove && isHorizontalOverlap;
  }

  isColliding(go) {
    let collisionX = this.x + this.hitboxOffsetX < go.x + go.hitboxOffsetX + go.hitboxWidth &&
      this.x + this.hitboxOffsetX + this.hitboxWidth > go.x + go.hitboxOffsetX;
    let collisionY = this.y + this.hitboxOffsetY < go.y + go.hitboxOffsetY + go.hitboxHeight &&
      this.y + this.hitboxOffsetY + this.hitboxHeight > go.y + go.hitboxOffsetY;
    return collisionX && collisionY;
  }
  
  noHit() {
    this.energy -= 0;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = Date.now();
    }
  }

  hit() {
    this.energy -= 5;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = Date.now();
    }
  }

  isHurt() {
    let timepassed = Date.now() - this.lastHit; // Zeit seit dem letzten Treffer
    timepassed = timepassed / 1000; // Zeit in Sekunden
    return timepassed < 1; // Wenn die Zeit kleiner als 0.5 ist, dann ist der Character verletzt
  }

  isDead() {
    return this.energy == 0;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        //ThrowableObject soll immer fallen
        this.y -= this.speedY;
        this.speedY -= this.accerlation;
        return this.onGround = true;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThroableObject) {
      return true;
    } else {
      if (this.y > 310) {
        this.y = 310;
      }
      return this.y < 310;
    }
  }

  playAnimation(images) {
    let i = this.currentImage % images.length; //let i = 6 % 6 = 0, Rest 0 i = 0,1,2,3,4,5,0
    let path = images[i];
    this.img = this.imageCache[path]; 
    this.currentImage++; //this.currentImage = 5 + 1 = 6
  }

  moveRight() {
    this.x += this.speed; // Bewegung nach rechts
  }

  moveLeft() {
    this.x -= this.speed;
  }

  stopMovement() {
    this.x = 0;
    this.speed = 0;
  }

  moveUp() {
    this.y -= this.speedY;
  }

  moveDown() {
    this.y += this.speedY;
  }
}

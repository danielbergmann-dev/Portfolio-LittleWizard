class EndbossOnFire extends MovableObject {
  height = 120;
  width = 80;
  y = 340;
  speed = 8;
  isDead = false;

  IMAGES_FIRE = [
    "img/0_endboss/Fire4_cycle3.png",
    "img/0_endboss/Fire4_cycle4.png",
    "img/0_endboss/Fire5.png",
    "img/0_endboss/Fire6.png",
    "img/0_endboss/Fire7.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_FIRE[0]);
    this.loadImages(this.IMAGES_FIRE);
    this.x = 2880;

    //Hitbox wird definiert
    this.hitboxWidth = 20;
    this.hitboxHeight = 90;
    this.hitboxOffsetX = 40;
    this.hitboxOffsetY = 70;
    this.attackCharacter();
    this.animate();
    this.die();
  }

  attackCharacter() {
    if (this.attack) {
      setTimeout(() => {
        this.playAnimation(this.IMAGES_FIRE);
      }, 50);
      setTimeout(() => {
        this.attack = false;
      }, 1000);
    }
  }

  die() {
    setInterval(() => {
      if (this.isDead) {
        this.moveLeft(); // Feuer vom Endboss bewegt sich nach links
        if (this.x > 2412) {
          this.playAnimation(this.IMAGES_FIRE);
        } else {
          this.x = 2880;
        }
      }
    }, 15000 / 60);
  }
    

  animate() {
    setInterval(() => {
      if (!this.isDead) {
        this.moveLeft(); // Feuer vom Endboss bewegt sich nach links
        if (this.x > 2412) {
          this.playAnimation(this.IMAGES_FIRE);
        } else {
          this.x = 2880;
        }
      }
    }, 6000 / 60);
  }
}

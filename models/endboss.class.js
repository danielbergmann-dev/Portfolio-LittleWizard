class Endboss extends MovableObject {
  height = 170;
  width = 160;
  y = 210;
  speed = 0;
  isDead = false;
  deathAnimationPlayed = false;
  gameOver = false;

  IMAGES_WALKING = [
    "img/0_endboss/Yeti/Walk1.png",
    "img/0_endboss/Yeti/Walk2.png",
    "img/0_endboss/Yeti/Walk3.png",
    "img/0_endboss/Yeti/Walk4.png",
    "img/0_endboss/Yeti/Walk5.png",
    "img/0_endboss/Yeti/Walk6.png",
  ];

  IMAGES_ATTACK = [
    "img/0_endboss/Yeti/Attack1.png",
    "img/0_endboss/Yeti/Attack2.png",
    "img/0_endboss/Yeti/Attack3.png",
    "img/0_endboss/Yeti/Attack4.png",
    "img/0_endboss/Yeti/Attack5.png",
  ];

  IMAGES_HURT = [
    "img/0_endboss/Yeti/Hurt1.png",
    "img/0_endboss/Yeti/Hurt2.png",
    "img/0_endboss/Yeti/Hurt1.png",
    "img/0_endboss/Yeti/Hurt2.png",
  ];

  IMAGES_IDLE = [
    "img/0_endboss/Yeti/Idle1.png",
    "img/0_endboss/Yeti/Idle2.png",
    "img/0_endboss/Yeti/Idle3.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_ATTACK[0]);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE);
    this.x = 3020;
    this.speed = 0;
    this.animate();

     //Hitbox wird definiert
     this.hitboxWidth = 50;
     this.hitboxHeight = 100;
     this.hitboxOffsetX = 10;
     this.hitboxOffsetY = 0;
  }

  animate() {
    this.animateSequence();
    setInterval(this.animateSequence, 5500);
    this.hurt();
  }

  animateSequence = () => {
    this.playAnimation(this.IMAGES_IDLE);
    setTimeout(() => {
      this.playAnimation(this.IMAGES_ATTACK);
      const animationInterval = setInterval(
        () => this.playAnimation(this.IMAGES_ATTACK),
        500
      );
      setTimeout(() => {
        clearInterval(animationInterval);
        this.playAnimation(this.IMAGES_IDLE);
      }, 5000);
    }, 500);
  };

  hurt() {
    setInterval(() => {
      if (this.isHurt()) {
        setTimeout(() => this.playAnimation(this.IMAGES_HURT), 50);
      }
    }, 8000 / 60);
  }
}

class Snake extends MovableObject {
  height = 130;
  width = 90;
  y = 350;
  speed = 3.5;
  //goblin_sound = new Audio("audio/goblin.mp3");
  isDead = false;

  IMAGES_WALK = [
    "img/pixel-art-monster-enemy-game-sprites/PNG/spider/walk1.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/spider/walk2.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/spider/walk3.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/spider/walk4.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/spider/walk5.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/spider/walk6.png",
  ];

  IMAGES_ATTACK = [
    "img/pixel-art-monster-enemy-game-sprites/PNG/spider/attack1.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/spider/attack2.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/spider/attack3.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_WALK[0]);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_ATTACK);
    this.x = 2321;

    //Hitbox wird definiert
    this.hitboxWidth = 60;
    this.hitboxHeight = 120;
    this.hitboxOffsetX = 10;
    this.hitboxOffsetY = 50;
    this.die();
    this.attackCharacter();
    this.animate();
  }

  attackCharacter() {
    if (this.attack) {
      setTimeout(() => {
        this.playAnimation(this.IMAGES_ATTACK);
      }, 50);
      setTimeout(() => {
        this.attack = false;
      }, 1000);
    }
  }

  die() {
    if (this.isDead) {
      this.y = 590;
    }
  }

  animate() {
    setInterval(() => {
      if (!this.isDead) {
        this.moveLeft();
        this.playAnimation(this.IMAGES_WALK);
        // Bedingung hinzugefügt, um x zurück auf 3020 zu setzen, wenn es 710 erreicht
        if (this.x <= 710) {
          this.x = 2300;
        }
      }
    }, 6000 / 60);
  }
}

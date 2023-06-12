class Snake2 extends MovableObject {
  height = 100;
  width = 80;
  y = 365;
  speed = 0.5;
  isDead = false;

  IMAGES_WALK = [
    "img/pixel-art-monster-enemy-game-sprites/PNG/Snake/Idle1.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/Snake/Idle2.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/Snake/Idle3.png",
  ];

  IMAGES_ATTACK = [
    "img/pixel-art-monster-enemy-game-sprites/PNG/Snake/Attack1.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/Snake/Attack2.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/Snake/Attack3.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/Snake/Attack4.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_WALK[0]); //super() ruft die Klasse MovableObject auf und ruft die Methode loadImage auf
    this.loadImages(this.IMAGES_WALK); // imagecache fülle ich mit den Bildern, die ich in der Klasse goblin habe
    this.loadImages(this.IMAGES_ATTACK);

    this.x = 2197;
    this.speed = this.speed + Math.random() * 0.25; //Speed wird randomisiert

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
      }
    }, 13000 / 60);
    if (this.x < 718) {
      this.x = 718;
    }
  }
}

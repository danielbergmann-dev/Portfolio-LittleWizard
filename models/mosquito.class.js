class Mosquito extends MovableObject {
  height = 180;
  width = 80;
  y = 210;
  speed = 5;
  isDead = false;

  IMAGES_FLYING = [
    "img/pixel-art-monster-enemy-game-sprites/PNG/mosquito/flight1.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/mosquito/flight2.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/mosquito/flight3.png",
  ];

  IMAGES_DEAD = [
    "img/pixel-art-monster-enemy-game-sprites/PNG/mosquito/death1.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/mosquito/death2.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/mosquito/death3.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/mosquito/death4.png",
  ];

  IMAGES_HURT = [
    "img/pixel-art-monster-enemy-game-sprites/PNG/mosquito/hurt1.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/mosquito/hurt2.png",
    "img/pixel-art-monster-enemy-game-sprites/PNG/mosquito/hurt3.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_FLYING[0]); //super() ruft die Klasse MovableObject auf und ruft die Methode loadImage auf
    this.loadImages(this.IMAGES_FLYING); // imagecache fülle ich mit den Bildern, die ich in der Klasse goblin habe
    this.loadImages(this.IMAGES_DEAD); // imagecache fülle ich mit den Bildern, die ich in der Klasse goblin habe
    this.loadImages(this.IMAGES_HURT); // imagecache fülle ich mit den Bildern, die ich in der Klasse goblin habe

    this.x = 2000 + Math.random() * 500; //Position x wird randomisiert
    this.speed = this.speed + Math.random() * 0.25; //Speed wird randomisiert

    //Hitbox wird definiert
    this.hitboxWidth = 40;
    this.hitboxHeight = 90;
    this.hitboxOffsetX = 30;
    this.hitboxOffsetY = 50;
    this.die();
    this.animate();
    this.attackCharacter();
  }

  die() {
    if (this.isDead) {
      // Set up the death animation interval
      this.deathInterval = setInterval(() => {
        this.playAnimation(this.IMAGES_DEAD);
        this.loadImage(this.IMAGES_DEAD[3]);
        this.y = -2000;
      }, 20);
    }
  }

  attackCharacter() {
    if (this.attack) {
      setTimeout(() => {
        this.playAnimation(this.IMAGES_FLYING);
      }, 50);
      setTimeout(() => {
        this.attack = false;
      }, 1000);
    }
  }

  animate() {
    setInterval(() => {
      if (!this.isDead) {
        this.moveLeft(); // goblin bewegt sich nach links
        this.playAnimation(this.IMAGES_FLYING);

        // Bedingung hinzugefügt, um x zurück auf 3020 zu setzen, wenn es 710 erreicht
        if (this.x <= 710) {
          this.x = 2384;
        }
      }
    }, 4000 / 60);

    if (this.isHurt()) {
      // Bedingung außerhalb des Intervalls
      this.playAnimation(this.IMAGES_HURT);
      setInterval(() => {
        this.playAnimation(this.IMAGES_HURT);
      }, 1000);
    }
  }
}

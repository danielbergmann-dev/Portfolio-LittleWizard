class LavaFire5 extends MovableObject {
  isDead = false;
  height = 70;
  width = 70;

  IMAGES_FIRE = [
    "img/11_LavaFire/Firewall1_2.png",
    "img/11_LavaFire/Firewall2_2.png",
    "img/11_LavaFire/Firewall3_2.png",
    "img/11_LavaFire/Firewall4_2.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_FIRE[0]); //super() ruft die Klasse MovableObject auf und ruft die Methode loadImage auf
    this.loadImages(this.IMAGES_FIRE); // imagecache fülle ich mit den Bildern, die ich in der Klasse goblin habe

    this.x = 2755;
    this.y = 415;

    //Hitbox wird definiert
    this.hitboxWidth = 0;
    this.hitboxHeight = 0;
    this.hitboxOffsetX = 0;
    this.hitboxOffsetY = -2000;
    this.die();
    this.animate();
    this.attackCharacter();
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
    if (this.isDead) {
      // Set up the death animation interval
      this.deathInterval = setInterval(() => {
        this.playAnimation(this.IMAGES_FIRE);
        this.y = 415;
      }, 415);
    }
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_FIRE);
    }, 7000 / 60);
  }
}

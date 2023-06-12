class Mimik1 extends MovableObject {
  height = 70;
  width = 70;

  IMAGES_FIRE = [
    "img/14_mimik/mimik1.png",
    "img/14_mimik/mimik2.png",
    "img/14_mimik/mimik3.png",
    "img/14_mimik/mimik4.png",
    "img/14_mimik/mimik5.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_FIRE[0]); //super() ruft die Klasse MovableObject auf und ruft die Methode loadImage auf
    this.loadImages(this.IMAGES_FIRE); // imagecache fülle ich mit den Bildern, die ich in der Klasse goblin habe

    this.x = -102;
    this.y = 375;

    //Hitbox wird definiert
    this.hitboxWidth = 80;
    this.hitboxHeight = 0;
    this.hitboxOffsetX = 0;
    this.hitboxOffsetY = 30;
    this.attackCharacter();
    this.animate();
    this.die();
  }

  die() {
    if (this.isDead) {
      // Set up the death animation interval

      this.y = 375;
    }
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
  
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_FIRE);
    }, 25000 / 60);
  }
}

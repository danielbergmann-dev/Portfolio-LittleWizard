class Pepe extends MovableObject {
  height = 80;
  width = 70;
  y = 385;
  speed = 0;
  isDead = false;

  IMAGES_IDLE = [
    "img/2_character_pepe/3_jump/J-31_1.png",
    "img/2_character_pepe/3_jump/J-31_2.png",
    "img/2_character_pepe/3_jump/J-31_3.png",
    "img/2_character_pepe/3_jump/J-31_4.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_IDLE[0]); //super() ruft die Klasse MovableObject auf und ruft die Methode loadImage auf
    this.loadImages(this.IMAGES_IDLE); // imagecache fülle ich mit den Bildern, die ich in der Klasse goblin habe
    this.x = 3015;
    this.speed = 0;
    this.animate();
  }

  animate() {
    // this.goblin_sound.volume = 0.3; // Lautstärke wird auf 50% gesetzt
    // this.goblin_sound.loop = true; // Sound wird als Schleife abgespielt
    //this.goblin_sound.play(); // Sound wird abgespielt
    setInterval(() => {
      if (!this.isDead) {
        this.moveLeft(); // goblin bewegt sich nach links
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 80000 / 60);
  }
}

class Torch3 extends MovableObject {
  height = 70;
  width = 70;

  IMAGES_FIRE = [
    "img/12_torch/torch1_1.png",
    "img/12_torch/torch1_2.png",
    "img/12_torch/torch1_3.png",
    "img/12_torch/torch1_4.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_FIRE[0]); //super() ruft die Klasse MovableObject auf und ruft die Methode loadImage auf
    this.loadImages(this.IMAGES_FIRE); // imagecache fülle ich mit den Bildern, die ich in der Klasse goblin habe
    this.x = -452;
    this.y = 375;

    //Hitbox wird definiert
    this.hitboxWidth = 120;
    this.hitboxHeight = 20;
    this.hitboxOffsetX = 5;
    this.hitboxOffsetY = 300;

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_FIRE);
    }, 7500 / 60);
  }
}
